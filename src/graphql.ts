
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    movies(page: string, resolution?: string, cat?: string): Movie[] | Promise<Movie[]>;
    serials(page: string, resolution?: string, cat?: string): Serial[] | Promise<Serial[]>;
}

export interface Serial {
    link?: string;
    kinopoisk_id?: string;
    date?: string;
    camrip?: string;
    ads?: string;
    block?: string;
    serial?: string;
    end?: string;
    quality?: string;
    translation?: string;
    max_qual?: string;
    last_season?: string;
    last_episode?: string;
    info?: Info;
}

export interface Movie {
    link?: string;
    kinopoisk_id?: string;
    date?: string;
    camrip?: string;
    ads?: string;
    block?: string;
    serial?: string;
    end?: string;
    quality?: string;
    translation?: string;
    max_qual?: string;
    info?: Info;
}

export interface Info {
    rus?: string;
    orig?: string;
    alter?: string;
    year?: string;
    country?: string;
    director?: string;
    genre?: string;
    actors?: string;
    description?: string;
    slogan?: string;
    premiere?: string;
    age?: string;
    time?: string;
    poster?: string;
    rating?: Rating;
}

export interface Rating {
    rating_kp?: string;
    vote_num_kp?: string;
    rating_imdb?: string;
    vote_num_imdb?: string;
}
