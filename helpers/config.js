const allConfig = require('../configs/config');
const envConst = require('../constants/env');
const { api } = require('../configs/config-dev');
const env = process.env.NODE_ENV || envConst.dev;
const config = allConfig[env];
const dbConfig = config.database;
//const appConfig = config.app;
//const apiConfig = config.api;
//const redisConfig = config.redis;
//const elasticSearchConfig = config.elasticSearch;
//const jwtConfig = config.jwt;
//const loginConfig = config.login;
//const encryptConfig = config.encrypt;
//const vimeoConfig = config.vimeo;
//const mockData = config.mockdata;
//const callThroughConfig = config.callThrough;
//const marketIndexConfig = config.marketIndex;

module.exports = {
    // database
    getMssqleformDBConfig: () => {
        return dbConfig.mssqleform;
    }//,
    // getRedisConfig: () => {
    //     return redisConfig;
    // },
    // getElasticSearchConfig: () => {
    //     return elasticSearchConfig
    // },
    // getJWTConfig: () => {
    //     return jwtConfig;
    // },
    // getDbPkgName: () => {
    //     return dbConfig.oracleM1.packageName;
    // },
    // getPackages: () => {
    //     return dbConfig.oracleM1.packages;
    // },
    // getLogin: () => {
    //     return loginConfig;
    // }
    // , getEncrypt: () =>{
    //     return encryptConfig;
    // }
    // , getVimeoConfig: () =>{
    //     return vimeoConfig;
    // }
    // , getCallThrough: () =>{
    //     return callThroughConfig;
    // }
    // , getMarketIndex: () =>{
    //     return marketIndexConfig;
    // }
    // , getCodeEnv: () =>{
    //     return appConfig.apiServerLocation;
    // }

    // app
    // , getAppPortNum: () => {
    //     return appConfig.port;
    // }
    // , getACLEnabled: () => {
    //     return appConfig.aclCheckEnabled;
    // }
    // , getNodeEnv: () => {
    //     return env;
    // }
    // , isCheckJwt: () => {
    //     return appConfig.isCheckJwt;
    // }
    // , getDefaultLimit: () => {
    //     return appConfig.limit;
    // }
    // , getAppListenAddr: () => {
    //     return appConfig.listenAddr;
    // }
    // , getWaterMarkLocation: () => {
    //     return appConfig.waterMarkLocation;
    // }
    // , getWaterMarkThumbNailLocation: () => {
    //     return appConfig.waterMarkThumbnailLocation;
    // }
    // , getIPAddrChecking: () => {
    //     return appConfig.checkIPLogin;
    // }
    // , getHSLDLocation: () => {
    //     return apiConfig.HSLDLocation;
    // }
    // , getEAAPDFLocation: () => {
    //     return apiConfig.EAAPDFLocation;
    // }
    // , getMrmsSearchLocation: () => {
    //     return apiConfig.MrmsSearchLocation;
    // }
    // , getCompanyLandSearchApi: () => {
    //     return apiConfig.CompanyLandSearchApi;
    // }
    // , getTtoSconversionApi: () => {
    //     return apiConfig.simpifiedChineseApi;
    // }
    // , isMock: () => {
    //     return appConfig.mock;
    // }
    // , getMockData: () => {
    //     return mockData;
    // }
    // , getApplyLandSearchUrl: () => {
    //     return apiConfig.applyLandSearchApi;
    // }
    // , getLogRotate: (path) => {
    //     return Object.assign({}, appConfig.logRotate, { path });
    // }
    // , getBuildingApi: () => {
    //     return apiConfig.buildingApi;
    // }
    // , getMemorialSearchApi: () => {
    //     return apiConfig.memorialSearchApi;
    // }
    // , getEmpPhotoApi: () => {
    //     return apiConfig.empPhotoApi;
    // }
    // , getProposalApi: () => {
    //     return apiConfig.proposalApi;
    // }
    // , getGenProposalPdfApi: () => {
    //     return apiConfig.genProposalPdfAPi;
    // }
    // , getMailConfig: () => {
    //     return appConfig.mailer;
    // }
    // , getEleafletPicApi: () => {
    //     return apiConfig.eLeafletPicApi;
    // }, getM1AppStockEaaPdfApi: () => {
    //     return apiConfig.m1appStockEaaPdfApi;
    // }
    // , getPrintProposalTimeout: () =>{
    //     return config.printProposalTimeout.mins;
    // }
    // , getSendSmsAPIParameter: () =>{
    //     return config.sendSmsAPIParameters;
    // }    
    // , getAwsS3: () =>{
    //     return config.awsS3;
    // }
    // , getIsHousekeepDataAuditLog: () =>{
    //     return appConfig.isHousekeepDataAuditLog;
    // }
    // , getWhatsAppConfig: () => {
    //     return config.whatsapp;
    // }
    // , getFileSize:() =>{
    //     return appConfig.fileSize;
    // }
    // , getMimeType:() =>{
    //     return appConfig.mimeType;
    // }
};
