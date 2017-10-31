import * as sut from './genre.actions';
import * as tmdbService from '../services/tmdb.service';

describe('genres actions', () => {
    describe('request genre action', () => {
        let dispatch;
        let getGenreListPromise;
        let genres;

        beforeEach(() => {
            genres = 'genres';

            dispatch = jest.fn();
            getGenreListPromise = Promise.resolve(genres);
            jest.spyOn(tmdbService, 'getGenreList').mockReturnValue(getGenreListPromise);

            sut.requestGenres()(dispatch);
        });

        test('should set genres on success genres fetch', done => {
            getGenreListPromise.then(() => {
                expect(dispatch).toHaveBeenCalledWith({
                    type: 'SET_GENRES',
                    payload: genres
                });
                done();
            });
        });
    });
});