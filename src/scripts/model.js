export default class Model {
  constructor() {
    /**
     * @typedef {Object} Task
     * @property {string} title Task Title
     * @property {string} text Task description
     * @property {"done" | "to do" | "in progress"} state Current state of the task
     * @property {string[]} tags Tasks tags
     */

    /**
     * @typedef {Object} List
     * @property {string} title title of the list
     * @property {string[]} tags tags for the list
     * @property {Task[]} tasks list's tasks
     */

    /**
     * @type {List[]} all the lists in the app
     */
    this.list = [
      {
        title: "first",
        tags: [],
        tasks: [
          {
            title: "WOW",
            text: "hello",
            state: "done",
            tags: ["important", "whoops"]
          }
        ]
      }
    ]
  }
}
