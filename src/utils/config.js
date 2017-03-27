import tld from 'tldjs'

const HOST = window.location.hostname

const config = {
  // 生产环境
  'prod': {
    home: '//cmcp.isesol.com',
    demand: '//cmcp_demand.isesol.com',
    supply: '//cmcp_supply.isesol.com',
    admin: '//cmcp_admin.isesol.com',
    api: '//api.isesol.com',
    apiPath: '//api.isesol.com/cgi'
  },
  // 预生产环境
  'pre': {
    home: '//cmcp.preisesol.com',
    demand: '//cmcp_demand.preisesol.com',
    supply: '//cmcp_supply.preisesol.com',
    admin: '//cmcp_admin.preisesol.com',
    api: '//api.preisesol.com',
    apiPath: '//api.preisesol.com/cgi'
  },
  // 测试环境
  'beta': {
    home: '//cmcp.i5sesol.com',
    demand: '//cmcp_demand.i5sesol.com',
    supply: '//cmcp_supply.i5sesol.c.com',
    admin: '//cmcp_admin.i5sesol.com',
    api: '//api.i5sesol.com',
    apiPath: '//api.i5sesol.com/cgi'
  },
  // 开发环境
  'dev': {
    home: '//home.cmcp.dev',
    demand: '//home.cmcp.dev',
    supply: '//home.cmcp.dev',
    admin: '//home.cmcp.dev',
    api: '//api.dev',
    apiPath: '//api.dev/cgi'
  },
  // 其他环境
  'other': {
    home: '//home.cmcp.dev',
    demand: '//home.cmcp.dev',
    supply: '//home.cmcp.dev',
    admin: '//home.cmcp.dev',
    api: '//api.dev',
    apiPath: '//api.dev/cgi'
  }
}

function createDomain (host) {
  let DOMAIN = {}
  const topDomain = tld.getDomain(host)
  if (topDomain === 'isesol.com') {
    DOMAIN = {
      ...config['prod'],
      tld: topDomain
    }
  } else if (topDomain === 'pre.isesol.com') {
    DOMAIN = {
      ...config['pre'],
      tld: topDomain
    }
  } else if (topDomain === 'pre.isesol.com') {
    DOMAIN = {
      ...config['beta'],
      tld: topDomain
    }
  } else if (topDomain === 'pre.isesol.com') {
    DOMAIN = {
      ...config['dev'],
      tld: topDomain
    }
  } else {
    DOMAIN = {
      ...config['other'],
      tld: host
    }
  }
  return DOMAIN
}

// 输出变量
export const DOMAIN = createDomain(HOST)
export const TOKEN_NAME = 'userToken'
