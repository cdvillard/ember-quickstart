import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return ['Captain America', 'Black Widow', 'Iron Man', 'The Hulk', 'Thor',];
  }
});
