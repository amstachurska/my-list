import {
    ADD_MANGA_REQUEST,
    ADD_MANGA_SUCCESS,
    ADD_MANGA_FAILURE,
    DELETE_MANGA_REQUEST,
    DELETE_MANGA_SUCCESS,
    DELETE_MANGA_FAILURE,
    EDIT_MANGA_REQUEST,
    EDIT_MANGA_SUCCESS,
    EDIT_MANGA_FAILURE,
    GET_MANGA_REQUEST,
    GET_MANGA_SUCCESS,
    GET_MANGA_FAILURE,
    GET_MANGAS_REQUEST,
    GET_MANGAS_SUCCESS,
    GET_MANGAS_FAILURE,
} from './types'
import mangasService from '../../services/mangas'

export const addManga = (manga) => (dispatch) => {
    dispatch({type: ADD_MANGA_REQUEST})
    mangasServices.addManga(manga).then((manga) => {
        dispatch({type: ADD_MANGA_SUCCESS, manga})
        dispatch(getMangas())
    }, (error) => {
        dispatch({type: ADD_MANGA_FAILURE, error: error.toString()})
    })
}

export const deleteManga = (id) => (dispatch) => {
    dispatch({type: DELETE_MANGA_REQUEST})
    mangasService.deleteManga(id).then((manga) => {
        dispatch({type: DELETE_MANGA_SUCCESS, manga})
        dispatch(getMangas())
    }, (error) => {
        dispatch({type: DELETE_MANGA_FAILURE, error: error.toString()})
    })
}

export const editManga = (manga) => (dispatch) => {
    dispatch({type: EDIT_MANGA_REQUEST})
    mangasService.editManga(manga).then((manga) => {
        dispatch({type: EDIT_MANGA_SUCCESS}, manga)
        dispatch(getMangas())
    }, (error) => {
        dispatch({type: EDIT_MANGA_FAILURE, error: error.toString()})
    })
}

export const getManga = (id) => (dispatch) => {
    dispatch({type: GET_MANGA_REQUEST})
    mangasService.getManga(id).then((manga) => {
        dispatch({type: GET_MANGA_SUCCESS, manga})
    }, (error) => {
        dispatch({type: GET_MANGA_FAILURE, error: error.toString()})
    })
}

export const getMangas = () => (dispatch) => {
    dispatch({type: GET_MANGAs_REQUEST})
    mangasService.getMangas().then((mangas) => {
        dispatch({type: GET_MANGAS_SUCCESS, payload: mangas})
    }, (error) => {
        dispatch({type: GET_MANGAS_FAILURE, error: true, payload: error.toString()})
    })
}

export default {
    addManga,
    deleteManga,
    editManga,
    getManga,
    getMangas,
}