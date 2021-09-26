export default class DOMFunction {

  /**
   * Gets a single element from the View
   * @param {string} selector css selector
   * @returns {HTMLElement} HTML Element
   */
  static getElement(selector) {
    return document.querySelector(selector);
  }

  /**
   * Gets a single element from the View
   * @param {string} selector css selector
   * @returns {NodeList} NodeList
   */
  static getAllElement(selector) {
    return document.querySelectorAll(selector);
  }
}
