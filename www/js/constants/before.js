/**
 * @desc: Since constants do not have dependency injections in angularJS, so
 *  at this level I have to make the decision of having either duplicated
 *  code or polluting temporarily the global namespace.
 *  I opted for the second. Will clean on after.js
 * @author: Filipe Mota de Sá - filipemotasa@hotmail.com
 */

window.NSEW = {
  'E': 'Este',
  'W': 'Oeste',
  'N': 'Norte',
  'S': 'Sul',
  'NE': 'Nordeste',
  'SE': 'Sudeste',
  'NW': 'Noroeste',
  'SW': 'Sudoeste'
};
