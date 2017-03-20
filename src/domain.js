const HOST = window.location.host

function createDomain (host) {
  const DOMAIN = {}
  if (HOST.indexOf('preisesol.com') > -1) {
    DOMAIN.api = '//api.preisesol.com'
    DOMAIN.tlp = 'preisesol.com'
  } else if (HOST.indexOf('isesol.com') > -1) {
    DOMAIN.api = '//api.isesol.com'
    DOMAIN.tlp = 'isesol.com'
  } else if (HOST.indexOf('i5sesol.com') > -1) {
    DOMAIN.api = '//api.i5sesol.com'
    DOMAIN.tlp = 'i5sesol.com'
  } else {
    DOMAIN.api = '//api.dev'
    DOMAIN.tlp = 'cmcp.dev'
  }
  DOMAIN.apiPath = DOMAIN.api + '/cgi'
  DOMAIN.tlp = 'localhost'
  return DOMAIN
}

export default createDomain(HOST)
