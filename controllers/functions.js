const tryCatch = require('../middleware/trycatch');
const Domain = require('../models/domain');

module.exports = {
  getDomains: tryCatch(async (req, res, next) => {
    let {
      countselect,
      scoreselect,
      lengthselect,
      domain,
      length,
      alphanumeric,
      numeric,
      hyphenated,
      tld,
      wordcount,
      words,
      score,
      is_favourite,
    } = req.body;
    const FindRelation = (op, val) => {
      switch (op) {
        case '0':
          return { $eq: val };
        case '1':
          return { $gt: val };
        case '2':
          return { $lt: val };
        case '3':
          return { $gte: val };
        case '4':
          return { $lte: val };
      }
    };
    let Exp = (arg) => {
      return new RegExp(arg, 'i');
    };
    let check = (arg) => {
      if (arg) {
        if (parseInt(arg)) {
          return true;
        } else false;
      } else return false;
    };
    let pageNo = parseInt(req.body.pageNo);
    let size = parseInt(req.body.size);
    let query = {};
    if (
      pageNo < 0 ||
      pageNo === 0 ||
      !(
        domain ||
        length ||
        alphanumeric ||
        numeric ||
        hyphenated ||
        tld ||
        wordcount ||
        words ||
        score ||
        is_favourite
      )
    ) {
      response = {
        error: true,
        message: 'invalid page number, should start with 1',
      };
      return res.json(response);
    }
    query.skip = size * (pageNo - 1);
    query.limit = size;
    Domain.countDocuments(
      {
        $and: [
          is_favourite ? { is_favourite: true } : {},
          score || score == '0'
            ? { sentiment_score: FindRelation(scoreselect, parseInt(score)) }
            : {},
          words ? { words: Exp(words) } : {},
          domain ? { domain: Exp(domain) } : {},
          length || length == '0'
            ? { 'metrics.length': FindRelation(lengthselect, parseInt(length)) }
            : {},
          alphanumeric || alphanumeric == '0'
            ? { 'metrics.alphanumeric': parseInt(alphanumeric) }
            : {},
          numeric || numeric == '0'
            ? { 'metrics.numeric': parseInt(numeric) }
            : {},
          hyphenated || hyphenated == '0'
            ? { 'metrics.hyphenated': parseInt(hyphenated) }
            : {},
          tld ? { 'metrics.tld': Exp(tld) } : {},
          wordcount || wordcount == '0'
            ? {
                'metrics.wordcount': FindRelation(
                  countselect,
                  parseInt(wordcount)
                ),
              }
            : {},
        ],
      },
      (err, totalCount) => {
        if (err) {
          response = { status: 'error', message: 'Error fetching data' };
        }
        Domain.find(
          {
            $and: [
              is_favourite ? { is_favourite: true } : {},
              score || score == '0' ? { sentiment_score: parseInt(score) } : {},
              words ? { words: Exp(words) } : {},
              domain ? { domain: Exp(domain) } : {},
              length || length == '0'
                ? { 'metrics.length': parseInt(length) }
                : {},
              alphanumeric || alphanumeric == '0'
                ? { 'metrics.alphanumeric': parseInt(alphanumeric) }
                : {},
              numeric || numeric == '0'
                ? { 'metrics.numeric': parseInt(numeric) }
                : {},
              hyphenated || hyphenated == '0'
                ? { 'metrics.hyphenated': parseInt(hyphenated) }
                : {},
              tld ? { 'metrics.tld': Exp(tld) } : {},
              wordcount || wordcount == '0'
                ? { 'metrics.wordcount': parseInt(wordcount) }
                : {},
            ],
          },
          {},
          query,
          (err, data) => {
            if (err) {
              response = { error: true, message: err };
            } else {
              let totalPages = Math.ceil(totalCount / size);
              response = {
                status: 'success',
                message: 'Domains retrieved successfully',
                data,
                pages: totalPages,
              };
            }
            res.json(response);
          }
        );
      }
    );
  }),

  addDomain: tryCatch(async (req, res, next) => {
    for (let i = 0; i < 1000; i++) {
      const NewDoamin = new Domain({
        domain: 'pnu.biz',
        metrics: {
          length: 3,
          alphanumeric: 0,
          numeric: 0,
          hyphenated: 0,
          tld: '.biz',
          wordcount: 2,
        },
        words: ['p', 'nu'],
        sentiment_score: 0,
      });
      await NewDoamin.save();
    }
    return res.status(200).json({ message: `Domain added` });
  }),

  deleteFavourite: tryCatch(async (req, res, next) => {
    const { ID } = req.body;
    console.log('removing', ID);
    const result = await Domain.findByIdAndUpdate(
      { _id: ID },
      { is_favourite: false }
    );
    return res.status(200).json({ message: `removed from Favourite`, result });
  }),

  addFavourite: tryCatch(async (req, res, next) => {
    const { ID } = req.body;
    console.log('adding', ID);
    const result = await Domain.findByIdAndUpdate(
      { _id: ID },
      { is_favourite: true }
    );
    return res.status(200).json({ message: `Added into Favourite`, result });
  }),
};
