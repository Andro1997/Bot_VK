const express = require('express');
const bodyParser = require('body-parser');
const { Botact } = require('botact');

const servar = express();
const bot = new Botact({
  token: '02df45c5951fc2a11435020e0df35ecee8680d96a3adc9e485284f7e2258a5fb5f2c54c641bdb90371f7b',
  confirmation: 'a9f54f0b'
});

bot.on( (ctx) => {
  console.log(ctx.body);

  ctx.reply('Привет');

})

bot.hears(/старт/, (ctx) => {
  ctx.reply('Вы успешно стартовали');
})

bot.hears(/время/, (ctx) => {
  const date = new Date()

  const h = date.getHours();
  const m = date.getMinutes();
  const s = date.getSeconds();

  const time = 'Привет сейчас ' + h + ':' + m + ':' + s  ;
  ctx.reply(time);

  bot.hears(/привет/, (ctx) => {
    ctx.reply('Привет');
  })
})

servar.use( bodyParser.json() );

servar.post('/', bot.listen);

servar.listen(80);
