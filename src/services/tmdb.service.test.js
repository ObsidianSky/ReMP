import * as sut from './tmdb.service';
import * as mapperService from './mapper.service';
import axios from 'axios';

describe('tmdb service', () => {
    let resp;
    let getPromise;

    beforeEach(() => {
        resp = { data: {} };

        getPromise = Promise.resolve(resp);

        jest.spyOn(axios, 'get').mockReturnValue(getPromise);
        jest.spyOn(mapperService, 'prepareSearchResp').mockImplementation(i => i.id);
    });

    describe('on getting genres list', () => {
        beforeEach(() => {
            resp.data = { genres: 'genres' };
        });

        test('should make call to api', done => {
            sut.getGenreList().then(() => {
                expect(axios.get).toHaveBeenCalledWith(
                    sut.apiUrl + sut.genrePath,
                    {
                        params: {
                            api_key: sut.apiKey
                        }
                    }
                );
                done();
            });

        });

        test('should get genres list', () => {
            return expect(sut.getGenreList()).resolves.toEqual(resp.data.genres);
        });
    });

    describe('on getting movies by director id', () => {
        let id;

        beforeEach(() => {
            id = 'id';
            resp.data = {
                crew: [ { id: 1, job: 'Director'}, { id: 2, job: 'Not Director'}, { id: 3, job: 'Director'}]
            };
        });

        test('should make call to api', done => {
            sut.getMoviesByDirectorId(id).then(() => {
                expect(axios.get).toHaveBeenCalledWith(
                    sut.apiUrl + `/person/${id}/movie_credits`,
                    { params: { api_key: sut.apiKey } }
                );
                done();
            });

        });

        describe('if director have movies', () => {
            test('should return prepared director movies', () => {
                return expect(sut.getMoviesByDirectorId(id)).resolves.toEqual([1, 3]);
            });
        });

        describe('if director have no movies', () => {
            beforeEach(() => {
                resp.data = { crew: [] };
            });

            test('should throw error', done => {
                sut.getMoviesByDirectorId(id).catch(e => {
                    expect(e).toBe(`No movies found for director with ${id}`);
                    done()
                })
            });
        });
    });

    describe('on getting movie by id', () => {
        let id;
        let preparedDetails;

        beforeEach(() => {
            id = 'id';
            preparedDetails = 'preparedDetails';

            jest.spyOn(mapperService, 'prepareDetailsResp').mockReturnValue(preparedDetails);
        });

        test('should make call to api', done => {
            sut.getMovieById(id).then(() => {
                expect(axios.get).toHaveBeenCalledWith(
                    sut.apiUrl + `${sut.getMovieDetailsPath}/${id}`,
                    { params:
                        {
                            api_key: sut.apiKey,
                            append_to_response: 'credits'
                        }
                    }
                );
                done();
            });
        });

        test('should return prepared details movies', () => {
            return expect(sut.getMovieById(id)).resolves.toEqual(preparedDetails);
        });
    });

    describe('on getting movies search result', () => {
        let query;

        beforeEach(() => {
            query = 'query';
        });

        describe('when we searching by title', () => {
            beforeEach(() => {
                resp.data = {
                    results: [{ id: 1 }, { id: 2 }, { id: 3 }]
                };
            });

            test('should make call to api', done => {
                sut.getMoviesSearchResult(query, 'title').then(() => {
                    expect(axios.get).toHaveBeenCalledWith(
                        sut.apiUrl + sut.movieSearchPath,
                        {
                            params: {
                                api_key: sut.apiKey,
                                query
                            }
                        }
                    );
                    done();
                });
            });

            describe('if we found movies', () => {
                test('should return prepared results', () => {
                    return expect(sut.getMoviesSearchResult(query, 'title')).resolves.toEqual([1, 2, 3]);
                });
            });

            describe('if we NOT found movies', () => {
                beforeEach(() => {
                    resp.data = { results: [] };
                });

                test('should throw error', () => {
                    return expect(sut.getMoviesSearchResult(query, 'director')).rejects.toEqual(`No movies found for ${query}`);
                });
            });
        });
    });
});