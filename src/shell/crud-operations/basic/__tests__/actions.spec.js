import { INITIAL } from '../constants';
import actions from '../actions';

describe('actions', () => {
  it('should handle addItem', () => {
    const state = { ...INITIAL };

    const payload = {
      primary: 'foo',
      accent: 'bar',
    };

    actions.addItem({ state }, payload);

    expect(state.dataset.length).toBe(5);
    expect(state.dataset).toMatchSnapshot();
  });

  it('should handle editItem', () => {
    const state = { ...INITIAL };

    const payload = {
      id: 1,
      primary: 'foo',
      accent: 'bar',
    };

    actions.editItem({ state }, payload);

    expect(state.dataset.length).toBe(4);
    expect(state.dataset).toMatchSnapshot();
  });

  it('should handle deleteItem', () => {
    const state = { ...INITIAL };
    const payload = { id: 1 };

    actions.deleteItem({ state }, payload);

    expect(state.dataset.length).toBe(3);
    expect(state.dataset).toMatchSnapshot();
  });

  it('should handle deleteChecked', () => {
    const state = { ...INITIAL };
    const selected = [...INITIAL.dataset];

    actions.deleteChecked({ state }, selected);

    expect(state.dataset.length).toBe(0);
  });

  it('should handle dialog', () => {
    const state = { ...INITIAL };
    const data = { dialogs: { edit: true } };

    actions.setState({ state }, data);

    expect(state.dialogs.edit).toBe(true);
  });

  it('should handle setState', () => {
    const state = { ...INITIAL };
    const item = { id: 1, primary: 'foo', accent: 'bar' };
    const data = { editData: item };

    actions.setState({ state }, data);

    expect(state.editData).toEqual(item);
  });
});
