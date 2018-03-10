import Vue from 'vue';
import Router from 'vue-router';

import { REST } from '~/crud-operations/rest';
import { GraphQL } from '~/crud-operations/graphql';
import { FormControls, TemplateDriven, Reactive } from '~/form-controls';
// import { Counter } from '~/playground/counter';

import NotFound from '~/shared/NotFound';
import CardLink from '~/shared/CardLink';

Vue.use(Router);

const FormControlsLink = {
  template: `
    <div>
      <v-btn color="info" to="/form-controls/template-driven">Template-driven</v-btn>
      <v-btn color="info" disabled to="/form-controls/reactive">Reactive</v-btn>
    </div>
  `,
};

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: CardLink },
    { path: '/counter', component: () => import('~/playground/counter/Counter') },
    { path: '/rest', component: REST },
    { path: '/graphql', component: GraphQL },
    {
      path: '/form-controls',
      component: FormControls,
      children: [
        { path: '', component: FormControlsLink },
        { path: 'template-driven', component: TemplateDriven },
        { path: 'reactive', component: Reactive },
      ],
    },
    { path: '*', component: NotFound },
  ],
});
