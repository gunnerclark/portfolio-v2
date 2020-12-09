import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fullTitle: 'gunner clark',
    firstTitle: 'gunner',
    cssColor: 'white',
    cssInvColor: 'black',
    // accentColor: '#e63c76',
    // accentColor: '#e91d63',
    accentColor: 'rgb(255, 159, 15)',
    bgProject: 'bg-project',
    projects: [
      {
        title: 'notes-v2',
        desc: 'my most recent - improved - note web app',
        img: 'notes-v2.jpg',
        github: 'https://github.com/gunnerclark/notes-v2',
        host: 'https://notes.gunnerclark.dev/',
        garden: 'https://garden.gunnerclark.dev/'
      },
      {
        title: 'portfolio-v2',
        desc: 'my new and improved portfolio site',
        img: 'portfolio-v2.jpg',
        github: 'https://github.com/gunnerclark/portfolio-v2',
        host: 'https://gunnerclark.dev/',
        garden: 'https://garden.gunnerclark.dev/'
      },
      {
        title: 'notes-v1',
        desc: 'my first attempt at a note web app',
        img: 'notes-v1.jpg',
        github: 'https://github.com/gunnerclark/notes-v1',
        host: '',
        garden: 'https://garden.gunnerclark.dev/'
      },
      {
        title: 'portfolio-v1',
        desc: 'my first shot at a portfolio site',
        img: 'portfolio-v1.jpg',
        github: 'https://github.com/gunnerclark/portfolio-v1',
        host: '',
        garden: 'https://garden.gunnerclark.dev/'
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    fullTitle: state => state.fullTitle,
    firstTitle: state => state.firstTitle,
    bgProject: state => state.bgProject,
    cssColor: state => state.cssColor,
    cssInvColor: state => state.cssInvColor,
    accentColor: state => state.accentColor,
  }
});
