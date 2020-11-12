
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    movies(type?: string, page?: string, resolution?: string, cat?: string): Movies[] | Promise<Movies[]>;
}

export interface Movies {
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
}
