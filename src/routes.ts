/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
  fetchMiddlewares,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { CountriesController } from './modules/countries/countries.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { ForexController } from './modules/forex/forex.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HealthController } from './modules/health/health.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { NewsController } from './modules/news/news.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { StockController } from './modules/stock/stock.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TimeZonesController } from './modules/time-zones/time-zones.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { WeatherController } from './modules/weather/weather.controller';
import type { RequestHandler, Router } from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  Isl: {
    dataType: 'refObject',
    properties: {
      official: { dataType: 'string', required: true },
      common: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  NativeName: {
    dataType: 'refObject',
    properties: {
      isl: { ref: 'Isl' },
      jpn: { ref: 'Isl' },
      fra: { ref: 'Isl' },
      ara: { ref: 'Isl' },
      som: { ref: 'Isl' },
      nld: { ref: 'Isl' },
      pap: { ref: 'Isl' },
      eng: { ref: 'Isl' },
      mri: { ref: 'Isl' },
      nzs: { ref: 'Isl' },
      spa: { ref: 'Isl' },
      sot: { ref: 'Isl' },
      nno: { ref: 'Isl' },
      nob: { ref: 'Isl' },
      smi: { ref: 'Isl' },
      aym: { ref: 'Isl' },
      que: { ref: 'Isl' },
      nau: { ref: 'Isl' },
      fij: { ref: 'Isl' },
      hif: { ref: 'Isl' },
      pau: { ref: 'Isl' },
      nor: { ref: 'Isl' },
      cnr: { ref: 'Isl' },
      est: { ref: 'Isl' },
      zho: { ref: 'Isl' },
      msa: { ref: 'Isl' },
      tam: { ref: 'Isl' },
      kaz: { ref: 'Isl' },
      rus: { ref: 'Isl' },
      crs: { ref: 'Isl' },
      hye: { ref: 'Isl' },
      swe: { ref: 'Isl' },
      cat: { ref: 'Isl' },
      tur: { ref: 'Isl' },
      amh: { ref: 'Isl' },
      grn: { ref: 'Isl' },
      ces: { ref: 'Isl' },
      slk: { ref: 'Isl' },
      fas: { ref: 'Isl' },
      por: { ref: 'Isl' },
      pov: { ref: 'Isl' },
      bar: { ref: 'Isl' },
      ssw: { ref: 'Isl' },
      cal: { ref: 'Isl' },
      cha: { ref: 'Isl' },
      swa: { ref: 'Isl' },
      hmo: { ref: 'Isl' },
      tpi: { ref: 'Isl' },
      tuk: { ref: 'Isl' },
      ron: { ref: 'Isl' },
      mah: { ref: 'Isl' },
      glv: { ref: 'Isl' },
      lao: { ref: 'Isl' },
      afr: { ref: 'Isl' },
      deu: { ref: 'Isl' },
      her: { ref: 'Isl' },
      hgm: { ref: 'Isl' },
      kwn: { ref: 'Isl' },
      loz: { ref: 'Isl' },
      ndo: { ref: 'Isl' },
      tsn: { ref: 'Isl' },
      smo: { ref: 'Isl' },
      nbl: { ref: 'Isl' },
      nso: { ref: 'Isl' },
      tso: { ref: 'Isl' },
      ven: { ref: 'Isl' },
      xho: { ref: 'Isl' },
      zul: { ref: 'Isl' },
      kir: { ref: 'Isl' },
      ton: { ref: 'Isl' },
      nya: { ref: 'Isl' },
      khm: { ref: 'Isl' },
      sqi: { ref: 'Isl' },
      srp: { ref: 'Isl' },
      ita: { ref: 'Isl' },
      sin: { ref: 'Isl' },
      lav: { ref: 'Isl' },
      jam: { ref: 'Isl' },
      pih: { ref: 'Isl' },
      gsw: { ref: 'Isl' },
      roh: { ref: 'Isl' },
      hrv: { ref: 'Isl' },
      tvl: { ref: 'Isl' },
      ell: { ref: 'Isl' },
      ind: { ref: 'Isl' },
      bos: { ref: 'Isl' },
      mfe: { ref: 'Isl' },
      fin: { ref: 'Isl' },
      arc: { ref: 'Isl' },
      ckb: { ref: 'Isl' },
      vie: { ref: 'Isl' },
      kon: { ref: 'Isl' },
      lin: { ref: 'Isl' },
      lua: { ref: 'Isl' },
      bwg: { ref: 'Isl' },
      kck: { ref: 'Isl' },
      khi: { ref: 'Isl' },
      ndc: { ref: 'Isl' },
      nde: { ref: 'Isl' },
      sna: { ref: 'Isl' },
      toi: { ref: 'Isl' },
      zib: { ref: 'Isl' },
      mkd: { ref: 'Isl' },
      rar: { ref: 'Isl' },
      tir: { ref: 'Isl' },
      mya: { ref: 'Isl' },
      ben: { ref: 'Isl' },
      gle: { ref: 'Isl' },
      ltz: { ref: 'Isl' },
      bis: { ref: 'Isl' },
      run: { ref: 'Isl' },
      dan: { ref: 'Isl' },
      fao: { ref: 'Isl' },
      pol: { ref: 'Isl' },
      kor: { ref: 'Isl' },
      prs: { ref: 'Isl' },
      pus: { ref: 'Isl' },
      aze: { ref: 'Isl' },
      mon: { ref: 'Isl' },
      uzb: { ref: 'Isl' },
      fil: { ref: 'Isl' },
      kat: { ref: 'Isl' },
      dzo: { ref: 'Isl' },
      hat: { ref: 'Isl' },
      ber: { ref: 'Isl' },
      mey: { ref: 'Isl' },
      lat: { ref: 'Isl' },
      sag: { ref: 'Isl' },
      tha: { ref: 'Isl' },
      kal: { ref: 'Isl' },
      ukr: { ref: 'Isl' },
      heb: { ref: 'Isl' },
      bul: { ref: 'Isl' },
      nep: { ref: 'Isl' },
      nrf: { ref: 'Isl' },
      zdj: { ref: 'Isl' },
      hin: { ref: 'Isl' },
      hun: { ref: 'Isl' },
      tet: { ref: 'Isl' },
      mlt: { ref: 'Isl' },
      nfr: { ref: 'Isl' },
      bjz: { ref: 'Isl' },
      gil: { ref: 'Isl' },
      mlg: { ref: 'Isl' },
      slv: { ref: 'Isl' },
      niu: { ref: 'Isl' },
      urd: { ref: 'Isl' },
      tkl: { ref: 'Isl' },
      kin: { ref: 'Isl' },
      bel: { ref: 'Isl' },
      div: { ref: 'Isl' },
      lit: { ref: 'Isl' },
      tgk: { ref: 'Isl' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Name: {
    dataType: 'refObject',
    properties: {
      common: { dataType: 'string', required: true },
      official: { dataType: 'string', required: true },
      nativeName: { ref: 'NativeName' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ISK: {
    dataType: 'refObject',
    properties: {
      name: { dataType: 'string', required: true },
      symbol: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  SDG: {
    dataType: 'refObject',
    properties: {
      name: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Currencies: {
    dataType: 'refObject',
    properties: {
      ISK: { ref: 'ISK' },
      JPY: { ref: 'ISK' },
      XPF: { ref: 'ISK' },
      SOS: { ref: 'ISK' },
      JOD: { ref: 'ISK' },
      USD: { ref: 'ISK' },
      DZD: { ref: 'ISK' },
      NZD: { ref: 'ISK' },
      CLP: { ref: 'ISK' },
      EUR: { ref: 'ISK' },
      LSL: { ref: 'ISK' },
      ZAR: { ref: 'ISK' },
      LBP: { ref: 'ISK' },
      NOK: { ref: 'ISK' },
      PEN: { ref: 'ISK' },
      SYP: { ref: 'ISK' },
      AUD: { ref: 'ISK' },
      FJD: { ref: 'ISK' },
      HNL: { ref: 'ISK' },
      XOF: { ref: 'ISK' },
      XCD: { ref: 'ISK' },
      SGD: { ref: 'ISK' },
      KZT: { ref: 'ISK' },
      SCR: { ref: 'ISK' },
      AMD: { ref: 'ISK' },
      CNY: { ref: 'ISK' },
      MYR: { ref: 'ISK' },
      TRY: { ref: 'ISK' },
      ETB: { ref: 'ISK' },
      PYG: { ref: 'ISK' },
      CZK: { ref: 'ISK' },
      IRR: { ref: 'ISK' },
      GHS: { ref: 'ISK' },
      SEK: { ref: 'ISK' },
      GYD: { ref: 'ISK' },
      BND: { ref: 'ISK' },
      SDG: { ref: 'SDG' },
      VES: { ref: 'ISK' },
      SZL: { ref: 'ISK' },
      EGP: { ref: 'ISK' },
      ILS: { ref: 'ISK' },
      STN: { ref: 'ISK' },
      KES: { ref: 'ISK' },
      PGK: { ref: 'ISK' },
      XAF: { ref: 'ISK' },
      TWD: { ref: 'ISK' },
      CVE: { ref: 'ISK' },
      TMT: { ref: 'ISK' },
      MDL: { ref: 'ISK' },
      RON: { ref: 'ISK' },
      GBP: { ref: 'ISK' },
      IMP: { ref: 'ISK' },
      LAK: { ref: 'ISK' },
      NAD: { ref: 'ISK' },
      KWD: { ref: 'ISK' },
      MXN: { ref: 'ISK' },
      WST: { ref: 'ISK' },
      SLL: { ref: 'ISK' },
      KGS: { ref: 'ISK' },
      SHP: { ref: 'ISK' },
      QAR: { ref: 'ISK' },
      TOP: { ref: 'ISK' },
      COP: { ref: 'ISK' },
      MWK: { ref: 'ISK' },
      KYD: { ref: 'ISK' },
      KHR: { ref: 'ISK' },
      RSD: { ref: 'ISK' },
      LKR: { ref: 'ISK' },
      JMD: { ref: 'ISK' },
      CHF: { ref: 'ISK' },
      GNF: { ref: 'ISK' },
      TVD: { ref: 'ISK' },
      IDR: { ref: 'ISK' },
      BAM: { ref: 'SDG' },
      DJF: { ref: 'ISK' },
      MUR: { ref: 'ISK' },
      BWP: { ref: 'ISK' },
      IQD: { ref: 'ISK' },
      VND: { ref: 'ISK' },
      CDF: { ref: 'ISK' },
      NGN: { ref: 'ISK' },
      ZWL: { ref: 'ISK' },
      MKD: { ref: 'ISK' },
      LRD: { ref: 'ISK' },
      CKD: { ref: 'ISK' },
      ARS: { ref: 'ISK' },
      BBD: { ref: 'ISK' },
      ERN: { ref: 'ISK' },
      MMK: { ref: 'ISK' },
      YER: { ref: 'ISK' },
      AWG: { ref: 'ISK' },
      BDT: { ref: 'ISK' },
      SRD: { ref: 'ISK' },
      BRL: { ref: 'ISK' },
      TND: { ref: 'ISK' },
      ANG: { ref: 'ISK' },
      VUV: { ref: 'ISK' },
      CUC: { ref: 'ISK' },
      CUP: { ref: 'ISK' },
      BIF: { ref: 'ISK' },
      BOB: { ref: 'ISK' },
      DKK: { ref: 'ISK' },
      FOK: { ref: 'ISK' },
      PLN: { ref: 'ISK' },
      CAD: { ref: 'ISK' },
      GTQ: { ref: 'ISK' },
      KPW: { ref: 'ISK' },
      UGX: { ref: 'ISK' },
      AFN: { ref: 'ISK' },
      AZN: { ref: 'ISK' },
      MRU: { ref: 'ISK' },
      MNT: { ref: 'ISK' },
      SBD: { ref: 'ISK' },
      UZS: { ref: 'ISK' },
      PHP: { ref: 'ISK' },
      BHD: { ref: 'ISK' },
      ALL: { ref: 'ISK' },
      GEL: { ref: 'ISK' },
      BTN: { ref: 'ISK' },
      INR: { ref: 'ISK' },
      SAR: { ref: 'ISK' },
      BSD: { ref: 'ISK' },
      AED: { ref: 'ISK' },
      HTG: { ref: 'ISK' },
      MAD: { ref: 'ISK' },
      LYD: { ref: 'ISK' },
      CRC: { ref: 'ISK' },
      THB: { ref: 'ISK' },
      TZS: { ref: 'ISK' },
      HKD: { ref: 'ISK' },
      BMD: { ref: 'ISK' },
      UAH: { ref: 'ISK' },
      MOP: { ref: 'ISK' },
      MZN: { ref: 'ISK' },
      DOP: { ref: 'ISK' },
      PAB: { ref: 'ISK' },
      BGN: { ref: 'ISK' },
      SSP: { ref: 'ISK' },
      GMD: { ref: 'ISK' },
      OMR: { ref: 'ISK' },
      RUB: { ref: 'ISK' },
      AOA: { ref: 'ISK' },
      NPR: { ref: 'ISK' },
      JEP: { ref: 'ISK' },
      KMF: { ref: 'ISK' },
      HUF: { ref: 'ISK' },
      FKP: { ref: 'ISK' },
      TTD: { ref: 'ISK' },
      GGP: { ref: 'ISK' },
      GIP: { ref: 'ISK' },
      BZD: { ref: 'ISK' },
      KID: { ref: 'ISK' },
      MGA: { ref: 'ISK' },
      KRW: { ref: 'ISK' },
      UYU: { ref: 'ISK' },
      NIO: { ref: 'ISK' },
      ZMW: { ref: 'ISK' },
      PKR: { ref: 'ISK' },
      RWF: { ref: 'ISK' },
      BYN: { ref: 'ISK' },
      MVR: { ref: 'ISK' },
      TJS: { ref: 'ISK' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Idd: {
    dataType: 'refObject',
    properties: {
      root: { dataType: 'string' },
      suffixes: { dataType: 'array', array: { dataType: 'string' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Languages: {
    dataType: 'refObject',
    properties: {
      isl: { dataType: 'string' },
      jpn: { dataType: 'string' },
      fra: { dataType: 'string' },
      ara: { dataType: 'string' },
      som: { dataType: 'string' },
      eng: { dataType: 'string' },
      nld: { dataType: 'string' },
      pap: { dataType: 'string' },
      mri: { dataType: 'string' },
      nzs: { dataType: 'string' },
      spa: { dataType: 'string' },
      sot: { dataType: 'string' },
      nno: { dataType: 'string' },
      nob: { dataType: 'string' },
      smi: { dataType: 'string' },
      aym: { dataType: 'string' },
      que: { dataType: 'string' },
      nau: { dataType: 'string' },
      fij: { dataType: 'string' },
      hif: { dataType: 'string' },
      pau: { dataType: 'string' },
      nor: { dataType: 'string' },
      cnr: { dataType: 'string' },
      est: { dataType: 'string' },
      zho: { dataType: 'string' },
      msa: { dataType: 'string' },
      tam: { dataType: 'string' },
      kaz: { dataType: 'string' },
      rus: { dataType: 'string' },
      crs: { dataType: 'string' },
      hye: { dataType: 'string' },
      swe: { dataType: 'string' },
      cat: { dataType: 'string' },
      tur: { dataType: 'string' },
      amh: { dataType: 'string' },
      grn: { dataType: 'string' },
      ces: { dataType: 'string' },
      slk: { dataType: 'string' },
      fas: { dataType: 'string' },
      por: { dataType: 'string' },
      pov: { dataType: 'string' },
      bar: { dataType: 'string' },
      ssw: { dataType: 'string' },
      cal: { dataType: 'string' },
      cha: { dataType: 'string' },
      swa: { dataType: 'string' },
      hmo: { dataType: 'string' },
      tpi: { dataType: 'string' },
      tuk: { dataType: 'string' },
      ron: { dataType: 'string' },
      mah: { dataType: 'string' },
      glv: { dataType: 'string' },
      lao: { dataType: 'string' },
      afr: { dataType: 'string' },
      deu: { dataType: 'string' },
      her: { dataType: 'string' },
      hgm: { dataType: 'string' },
      kwn: { dataType: 'string' },
      loz: { dataType: 'string' },
      ndo: { dataType: 'string' },
      tsn: { dataType: 'string' },
      smo: { dataType: 'string' },
      nbl: { dataType: 'string' },
      nso: { dataType: 'string' },
      tso: { dataType: 'string' },
      ven: { dataType: 'string' },
      xho: { dataType: 'string' },
      zul: { dataType: 'string' },
      kir: { dataType: 'string' },
      ton: { dataType: 'string' },
      nya: { dataType: 'string' },
      khm: { dataType: 'string' },
      sqi: { dataType: 'string' },
      srp: { dataType: 'string' },
      ita: { dataType: 'string' },
      sin: { dataType: 'string' },
      lav: { dataType: 'string' },
      jam: { dataType: 'string' },
      pih: { dataType: 'string' },
      gsw: { dataType: 'string' },
      roh: { dataType: 'string' },
      hrv: { dataType: 'string' },
      tvl: { dataType: 'string' },
      ell: { dataType: 'string' },
      ind: { dataType: 'string' },
      bos: { dataType: 'string' },
      mfe: { dataType: 'string' },
      fin: { dataType: 'string' },
      arc: { dataType: 'string' },
      ckb: { dataType: 'string' },
      vie: { dataType: 'string' },
      kon: { dataType: 'string' },
      lin: { dataType: 'string' },
      lua: { dataType: 'string' },
      bwg: { dataType: 'string' },
      kck: { dataType: 'string' },
      khi: { dataType: 'string' },
      ndc: { dataType: 'string' },
      nde: { dataType: 'string' },
      sna: { dataType: 'string' },
      toi: { dataType: 'string' },
      zib: { dataType: 'string' },
      mkd: { dataType: 'string' },
      rar: { dataType: 'string' },
      tir: { dataType: 'string' },
      mya: { dataType: 'string' },
      ben: { dataType: 'string' },
      gle: { dataType: 'string' },
      ltz: { dataType: 'string' },
      bis: { dataType: 'string' },
      run: { dataType: 'string' },
      dan: { dataType: 'string' },
      fao: { dataType: 'string' },
      pol: { dataType: 'string' },
      kor: { dataType: 'string' },
      prs: { dataType: 'string' },
      pus: { dataType: 'string' },
      aze: { dataType: 'string' },
      mon: { dataType: 'string' },
      uzb: { dataType: 'string' },
      fil: { dataType: 'string' },
      kat: { dataType: 'string' },
      dzo: { dataType: 'string' },
      hat: { dataType: 'string' },
      ber: { dataType: 'string' },
      mey: { dataType: 'string' },
      lat: { dataType: 'string' },
      sag: { dataType: 'string' },
      tha: { dataType: 'string' },
      kal: { dataType: 'string' },
      ukr: { dataType: 'string' },
      heb: { dataType: 'string' },
      bul: { dataType: 'string' },
      nep: { dataType: 'string' },
      nrf: { dataType: 'string' },
      zdj: { dataType: 'string' },
      hin: { dataType: 'string' },
      hun: { dataType: 'string' },
      tet: { dataType: 'string' },
      mlt: { dataType: 'string' },
      nfr: { dataType: 'string' },
      bjz: { dataType: 'string' },
      gil: { dataType: 'string' },
      mlg: { dataType: 'string' },
      slv: { dataType: 'string' },
      niu: { dataType: 'string' },
      urd: { dataType: 'string' },
      tkl: { dataType: 'string' },
      kin: { dataType: 'string' },
      bel: { dataType: 'string' },
      div: { dataType: 'string' },
      lit: { dataType: 'string' },
      tgk: { dataType: 'string' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Translations: {
    dataType: 'refObject',
    properties: {
      ara: { ref: 'Isl', required: true },
      bre: { ref: 'Isl', required: true },
      ces: { ref: 'Isl', required: true },
      cym: { ref: 'Isl', required: true },
      deu: { ref: 'Isl', required: true },
      est: { ref: 'Isl', required: true },
      fin: { ref: 'Isl', required: true },
      fra: { ref: 'Isl', required: true },
      hrv: { ref: 'Isl' },
      hun: { ref: 'Isl', required: true },
      ita: { ref: 'Isl', required: true },
      jpn: { ref: 'Isl' },
      kor: { ref: 'Isl', required: true },
      nld: { ref: 'Isl', required: true },
      per: { ref: 'Isl' },
      pol: { ref: 'Isl', required: true },
      por: { ref: 'Isl', required: true },
      rus: { ref: 'Isl', required: true },
      slk: { ref: 'Isl', required: true },
      spa: { ref: 'Isl', required: true },
      srp: { ref: 'Isl', required: true },
      swe: { ref: 'Isl', required: true },
      tur: { ref: 'Isl', required: true },
      urd: { ref: 'Isl', required: true },
      zho: { ref: 'Isl' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Eng: {
    dataType: 'refObject',
    properties: {
      f: { dataType: 'string', required: true },
      m: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Demonyms: {
    dataType: 'refObject',
    properties: {
      eng: { ref: 'Eng', required: true },
      fra: { ref: 'Eng' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Maps: {
    dataType: 'refObject',
    properties: {
      googleMaps: { dataType: 'string', required: true },
      openStreetMaps: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Gini: {
    dataType: 'refObject',
    properties: {
      '1992': { dataType: 'double' },
      '1998': { dataType: 'double' },
      '1999': { dataType: 'double' },
      '2003': { dataType: 'double' },
      '2004': { dataType: 'double' },
      '2005': { dataType: 'double' },
      '2006': { dataType: 'double' },
      '2008': { dataType: 'double' },
      '2009': { dataType: 'double' },
      '2010': { dataType: 'double' },
      '2011': { dataType: 'double' },
      '2012': { dataType: 'double' },
      '2013': { dataType: 'double' },
      '2014': { dataType: 'double' },
      '2015': { dataType: 'double' },
      '2016': { dataType: 'double' },
      '2017': { dataType: 'double' },
      '2018': { dataType: 'double' },
      '2019': { dataType: 'double' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Car: {
    dataType: 'refObject',
    properties: {
      signs: { dataType: 'array', array: { dataType: 'string' } },
      side: { dataType: 'string', required: true },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Flags: {
    dataType: 'refObject',
    properties: {
      png: { dataType: 'string', required: true },
      svg: { dataType: 'string', required: true },
      alt: { dataType: 'string' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CoatOfArms: {
    dataType: 'refObject',
    properties: {
      png: { dataType: 'string' },
      svg: { dataType: 'string' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CapitalInfo: {
    dataType: 'refObject',
    properties: {
      latlng: { dataType: 'array', array: { dataType: 'double' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  PostalCode: {
    dataType: 'refObject',
    properties: {
      format: { dataType: 'string', required: true },
      regex: { dataType: 'string' },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Country: {
    dataType: 'refObject',
    properties: {
      name: { ref: 'Name', required: true },
      tld: { dataType: 'array', array: { dataType: 'string' } },
      cca2: { dataType: 'string', required: true },
      ccn3: { dataType: 'string' },
      cca3: { dataType: 'string', required: true },
      cioc: { dataType: 'string' },
      independent: { dataType: 'boolean' },
      status: { dataType: 'string', required: true },
      unMember: { dataType: 'boolean', required: true },
      currencies: { ref: 'Currencies' },
      idd: { ref: 'Idd', required: true },
      capital: { dataType: 'array', array: { dataType: 'string' } },
      altSpellings: {
        dataType: 'array',
        array: { dataType: 'string' },
        required: true,
      },
      region: { dataType: 'string', required: true },
      subregion: { dataType: 'string' },
      languages: { ref: 'Languages' },
      translations: { ref: 'Translations', required: true },
      latlng: {
        dataType: 'array',
        array: { dataType: 'double' },
        required: true,
      },
      landlocked: { dataType: 'boolean', required: true },
      area: { dataType: 'double', required: true },
      demonyms: { ref: 'Demonyms' },
      flag: { dataType: 'string', required: true },
      maps: { ref: 'Maps', required: true },
      population: { dataType: 'double', required: true },
      gini: { ref: 'Gini' },
      fifa: { dataType: 'string' },
      car: { ref: 'Car', required: true },
      timezones: {
        dataType: 'array',
        array: { dataType: 'string' },
        required: true,
      },
      continents: {
        dataType: 'array',
        array: { dataType: 'string' },
        required: true,
      },
      flags: { ref: 'Flags', required: true },
      coatOfArms: { ref: 'CoatOfArms', required: true },
      startOfWeek: { dataType: 'string', required: true },
      capitalInfo: { ref: 'CapitalInfo', required: true },
      postalCode: { ref: 'PostalCode' },
      borders: { dataType: 'array', array: { dataType: 'string' } },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ForexCurrency: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        favourite: { dataType: 'boolean', required: true },
        currency: { dataType: 'string', required: true },
        code: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  ForexRate: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        rate: { dataType: 'double', required: true },
        date: { dataType: 'string', required: true },
        code: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Article: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        content: { dataType: 'string', required: true },
        publishedAt: { dataType: 'string', required: true },
        urlToImage: { dataType: 'string', required: true },
        url: { dataType: 'string', required: true },
        description: { dataType: 'string', required: true },
        title: { dataType: 'string', required: true },
        author: { dataType: 'string', required: true },
        source: {
          dataType: 'nestedObjectLiteral',
          nestedProperties: {
            name: { dataType: 'string', required: true },
            id: { dataType: 'string', required: true },
          },
          required: true,
        },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  SearchIn: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['title'] },
        { dataType: 'enum', enums: ['description'] },
        { dataType: 'enum', enums: ['content'] },
        { dataType: 'enum', enums: [''] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Language: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['ar'] },
        { dataType: 'enum', enums: ['de'] },
        { dataType: 'enum', enums: ['en'] },
        { dataType: 'enum', enums: ['es'] },
        { dataType: 'enum', enums: ['fr'] },
        { dataType: 'enum', enums: ['he'] },
        { dataType: 'enum', enums: ['it'] },
        { dataType: 'enum', enums: ['nl'] },
        { dataType: 'enum', enums: ['no'] },
        { dataType: 'enum', enums: ['pt'] },
        { dataType: 'enum', enums: ['ru'] },
        { dataType: 'enum', enums: ['sv'] },
        { dataType: 'enum', enums: ['ud'] },
        { dataType: 'enum', enums: ['zh'] },
        { dataType: 'enum', enums: [''] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  SortBy: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['relevancy'] },
        { dataType: 'enum', enums: ['popularity'] },
        { dataType: 'enum', enums: ['publishedAt'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CountryCode: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['ae'] },
        { dataType: 'enum', enums: ['ar'] },
        { dataType: 'enum', enums: ['at'] },
        { dataType: 'enum', enums: ['au'] },
        { dataType: 'enum', enums: ['be'] },
        { dataType: 'enum', enums: ['bg'] },
        { dataType: 'enum', enums: ['br'] },
        { dataType: 'enum', enums: ['ca'] },
        { dataType: 'enum', enums: ['ch'] },
        { dataType: 'enum', enums: ['cn'] },
        { dataType: 'enum', enums: ['co'] },
        { dataType: 'enum', enums: ['cu'] },
        { dataType: 'enum', enums: ['cz'] },
        { dataType: 'enum', enums: ['de'] },
        { dataType: 'enum', enums: ['eg'] },
        { dataType: 'enum', enums: ['fr'] },
        { dataType: 'enum', enums: ['gb'] },
        { dataType: 'enum', enums: ['gr'] },
        { dataType: 'enum', enums: ['hk'] },
        { dataType: 'enum', enums: ['hu'] },
        { dataType: 'enum', enums: ['id'] },
        { dataType: 'enum', enums: ['ie'] },
        { dataType: 'enum', enums: ['il'] },
        { dataType: 'enum', enums: ['in'] },
        { dataType: 'enum', enums: ['it'] },
        { dataType: 'enum', enums: ['jp'] },
        { dataType: 'enum', enums: ['kr'] },
        { dataType: 'enum', enums: ['lt'] },
        { dataType: 'enum', enums: ['lv'] },
        { dataType: 'enum', enums: ['ma'] },
        { dataType: 'enum', enums: ['mx'] },
        { dataType: 'enum', enums: ['my'] },
        { dataType: 'enum', enums: ['ng'] },
        { dataType: 'enum', enums: ['nl'] },
        { dataType: 'enum', enums: ['no'] },
        { dataType: 'enum', enums: ['nz'] },
        { dataType: 'enum', enums: ['ph'] },
        { dataType: 'enum', enums: ['pl'] },
        { dataType: 'enum', enums: ['pt'] },
        { dataType: 'enum', enums: ['ro'] },
        { dataType: 'enum', enums: ['rs'] },
        { dataType: 'enum', enums: ['ru'] },
        { dataType: 'enum', enums: ['sa'] },
        { dataType: 'enum', enums: ['se'] },
        { dataType: 'enum', enums: ['sg'] },
        { dataType: 'enum', enums: ['si'] },
        { dataType: 'enum', enums: ['sk'] },
        { dataType: 'enum', enums: ['th'] },
        { dataType: 'enum', enums: ['tr'] },
        { dataType: 'enum', enums: ['tw'] },
        { dataType: 'enum', enums: ['ua'] },
        { dataType: 'enum', enums: ['us'] },
        { dataType: 'enum', enums: ['ve'] },
        { dataType: 'enum', enums: ['za'] },
        { dataType: 'enum', enums: [''] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Category: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['business'] },
        { dataType: 'enum', enums: ['entertainment'] },
        { dataType: 'enum', enums: ['general'] },
        { dataType: 'enum', enums: ['health'] },
        { dataType: 'enum', enums: ['science'] },
        { dataType: 'enum', enums: ['sports'] },
        { dataType: 'enum', enums: ['technology'] },
        { dataType: 'enum', enums: [''] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  NewsSource: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        country: { dataType: 'string', required: true },
        language: { dataType: 'string', required: true },
        category: { dataType: 'string', required: true },
        url: { dataType: 'string', required: true },
        description: { dataType: 'string', required: true },
        name: { dataType: 'string', required: true },
        id: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  GoogleTrendsByCountry: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        trends: {
          dataType: 'array',
          array: { dataType: 'string' },
          required: true,
        },
        country: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  TimeZone: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        rawOffset: { dataType: 'double', required: true },
        utcOffset: { dataType: 'string', required: true },
        abbreviation: { dataType: 'string', required: true },
        timezone: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Weather: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        minTemperature: { dataType: 'double', required: true },
        maxTemperature: { dataType: 'double', required: true },
        temperature: { dataType: 'double', required: true },
        description: { dataType: 'string', required: true },
        main: { dataType: 'string', required: true },
        country: { dataType: 'string', required: true },
        name: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Lang: {
    dataType: 'refAlias',
    type: {
      dataType: 'union',
      subSchemas: [
        { dataType: 'enum', enums: ['af'] },
        { dataType: 'enum', enums: ['al'] },
        { dataType: 'enum', enums: ['ar'] },
        { dataType: 'enum', enums: ['az'] },
        { dataType: 'enum', enums: ['bg'] },
        { dataType: 'enum', enums: ['ca'] },
        { dataType: 'enum', enums: ['cz'] },
        { dataType: 'enum', enums: ['da'] },
        { dataType: 'enum', enums: ['de'] },
        { dataType: 'enum', enums: ['el'] },
        { dataType: 'enum', enums: ['en'] },
        { dataType: 'enum', enums: ['es'] },
        { dataType: 'enum', enums: ['fa'] },
        { dataType: 'enum', enums: ['fi'] },
        { dataType: 'enum', enums: ['fr'] },
        { dataType: 'enum', enums: ['gl'] },
        { dataType: 'enum', enums: ['he'] },
        { dataType: 'enum', enums: ['hi'] },
        { dataType: 'enum', enums: ['hr'] },
        { dataType: 'enum', enums: ['hu'] },
        { dataType: 'enum', enums: ['id'] },
        { dataType: 'enum', enums: ['it'] },
        { dataType: 'enum', enums: ['ja'] },
        { dataType: 'enum', enums: ['kr'] },
        { dataType: 'enum', enums: ['la'] },
        { dataType: 'enum', enums: ['lt'] },
        { dataType: 'enum', enums: ['mk'] },
        { dataType: 'enum', enums: ['no'] },
        { dataType: 'enum', enums: ['nl'] },
        { dataType: 'enum', enums: ['pl'] },
        { dataType: 'enum', enums: ['pt'] },
        { dataType: 'enum', enums: ['pt_br'] },
        { dataType: 'enum', enums: ['ro'] },
        { dataType: 'enum', enums: ['ru'] },
        { dataType: 'enum', enums: ['se'] },
        { dataType: 'enum', enums: ['sk'] },
        { dataType: 'enum', enums: ['sl'] },
        { dataType: 'enum', enums: ['sp'] },
        { dataType: 'enum', enums: ['sr'] },
        { dataType: 'enum', enums: ['sv'] },
        { dataType: 'enum', enums: ['th'] },
        { dataType: 'enum', enums: ['tr'] },
        { dataType: 'enum', enums: ['ua'] },
        { dataType: 'enum', enums: ['uk'] },
        { dataType: 'enum', enums: ['vi'] },
        { dataType: 'enum', enums: ['zh_cn'] },
        { dataType: 'enum', enums: ['zh_tw'] },
        { dataType: 'enum', enums: ['zu'] },
      ],
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get(
    '/api/countries',
    ...fetchMiddlewares<RequestHandler>(CountriesController),
    ...fetchMiddlewares<RequestHandler>(
      CountriesController.prototype.getCountries
    ),

    function CountriesController_getCountries(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new CountriesController();

        const promise = controller.getCountries.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/forex/currencies',
    ...fetchMiddlewares<RequestHandler>(ForexController),
    ...fetchMiddlewares<RequestHandler>(
      ForexController.prototype.getCurrencies
    ),

    function ForexController_getCurrencies(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new ForexController();

        const promise = controller.getCurrencies.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/forex/rates',
    ...fetchMiddlewares<RequestHandler>(ForexController),
    ...fetchMiddlewares<RequestHandler>(ForexController.prototype.getRates),

    function ForexController_getRates(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new ForexController();

        const promise = controller.getRates.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/health',
    ...fetchMiddlewares<RequestHandler>(HealthController),
    ...fetchMiddlewares<RequestHandler>(HealthController.prototype.get),

    function HealthController_get(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new HealthController();

        const promise = controller.get.apply(controller, validatedArgs as any);
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/news',
    ...fetchMiddlewares<RequestHandler>(NewsController),
    ...fetchMiddlewares<RequestHandler>(NewsController.prototype.getNews),

    function NewsController_getNews(request: any, response: any, next: any) {
      const args = {
        query: { default: '', in: 'query', name: 'query', dataType: 'string' },
        searchIn: {
          default: '',
          in: 'query',
          name: 'searchIn',
          ref: 'SearchIn',
        },
        from: { default: '', in: 'query', name: 'from', dataType: 'string' },
        to: { default: '', in: 'query', name: 'to', dataType: 'string' },
        language: {
          default: '',
          in: 'query',
          name: 'language',
          ref: 'Language',
        },
        sortBy: {
          default: 'publishedAt',
          in: 'query',
          name: 'sortBy',
          ref: 'SortBy',
        },
        page: { default: 1, in: 'query', name: 'page', dataType: 'double' },
        pageSize: {
          default: 100,
          in: 'query',
          name: 'pageSize',
          dataType: 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new NewsController();

        const promise = controller.getNews.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/news/headlines',
    ...fetchMiddlewares<RequestHandler>(NewsController),
    ...fetchMiddlewares<RequestHandler>(NewsController.prototype.getHeadlines),

    function NewsController_getHeadlines(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        query: { default: '', in: 'query', name: 'query', dataType: 'string' },
        country: {
          default: '',
          in: 'query',
          name: 'country',
          ref: 'CountryCode',
        },
        category: {
          default: '',
          in: 'query',
          name: 'category',
          ref: 'Category',
        },
        page: { default: 1, in: 'query', name: 'page', dataType: 'double' },
        pageSize: {
          default: 100,
          in: 'query',
          name: 'pageSize',
          dataType: 'double',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new NewsController();

        const promise = controller.getHeadlines.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/news/sources',
    ...fetchMiddlewares<RequestHandler>(NewsController),
    ...fetchMiddlewares<RequestHandler>(NewsController.prototype.getSources),

    function NewsController_getSources(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new NewsController();

        const promise = controller.getSources.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/news/google/trends',
    ...fetchMiddlewares<RequestHandler>(NewsController),
    ...fetchMiddlewares<RequestHandler>(
      NewsController.prototype.getGoogleTrends
    ),

    function NewsController_getGoogleTrends(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new NewsController();

        const promise = controller.getGoogleTrends.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/stock',
    ...fetchMiddlewares<RequestHandler>(StockController),
    ...fetchMiddlewares<RequestHandler>(StockController.prototype.get),

    function StockController_get(request: any, response: any, next: any) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new StockController();

        const promise = controller.get.apply(controller, validatedArgs as any);
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/time-zones',
    ...fetchMiddlewares<RequestHandler>(TimeZonesController),
    ...fetchMiddlewares<RequestHandler>(
      TimeZonesController.prototype.getTimeZones
    ),

    function TimeZonesController_getTimeZones(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TimeZonesController();

        const promise = controller.getTimeZones.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/time-zones/:timeZone',
    ...fetchMiddlewares<RequestHandler>(TimeZonesController),
    ...fetchMiddlewares<RequestHandler>(
      TimeZonesController.prototype.getTimeZone
    ),

    function TimeZonesController_getTimeZone(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        timeZone: {
          in: 'path',
          name: 'timeZone',
          required: true,
          dataType: 'string',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new TimeZonesController();

        const promise = controller.getTimeZone.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/weather',
    ...fetchMiddlewares<RequestHandler>(WeatherController),
    ...fetchMiddlewares<RequestHandler>(WeatherController.prototype.getWeather),

    function WeatherController_getWeather(
      request: any,
      response: any,
      next: any
    ) {
      const args = {
        query: { default: '', in: 'query', name: 'query', dataType: 'string' },
        lang: { default: 'en', in: 'query', name: 'lang', ref: 'Lang' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new WeatherController();

        const promise = controller.getWeather.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/api/weather/air-quality',
    ...fetchMiddlewares<RequestHandler>(WeatherController),
    ...fetchMiddlewares<RequestHandler>(
      WeatherController.prototype.getAirQuality
    ),

    function WeatherController_getAirQuality(
      request: any,
      response: any,
      next: any
    ) {
      const args = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);

        const controller = new WeatherController();

        const promise = controller.getAirQuality.apply(
          controller,
          validatedArgs as any
        );
        promiseHandler(controller, promise, response, 200, next);
      } catch (err) {
        return next(err);
      }
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      'getHeaders' in object && 'getStatus' in object && 'setStatus' in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    successStatus: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode = successStatus;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus() || statusCode;
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    if (response.headersSent) {
      return;
    }
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === 'function' &&
      data.readable &&
      typeof data._read === 'function'
    ) {
      response.status(statusCode || 200);
      data.pipe(response);
    } else if (data !== null && data !== undefined) {
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case 'request':
          return request;
        case 'query':
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'queries':
          return validationService.ValidateParam(
            args[key],
            request.query,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'path':
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'header':
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body':
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'body-prop':
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            'body.',
            { noImplicitAdditionalProperties: 'throw-on-extras' }
          );
        case 'formData':
          if (args[key].dataType === 'file') {
            return validationService.ValidateParam(
              args[key],
              request.file,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else if (
            args[key].dataType === 'array' &&
            args[key].array.dataType === 'file'
          ) {
            return validationService.ValidateParam(
              args[key],
              request.files,
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          } else {
            return validationService.ValidateParam(
              args[key],
              request.body[name],
              name,
              fieldErrors,
              undefined,
              { noImplicitAdditionalProperties: 'throw-on-extras' }
            );
          }
        case 'res':
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, '');
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
