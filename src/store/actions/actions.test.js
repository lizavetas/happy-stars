import * as actions from '../../store/actions/index';
import * as types from '../../store/actions/actionTypes';

describe('actions', () => {
    it('should create an action to delete a star', () => {
        const id = 112;
        const expectedAction = {
            type: types.DELETE_STAR_SUCCESS,
            id
        };
        expect(actions.deleteStarSuccess(id)).toEqual(expectedAction)
    })
});
