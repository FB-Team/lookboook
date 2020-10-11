import { NEXT_PAGE } from '../../actions/content/paginationActions';

const initialState = {
  book: '',
  currentPage: null,
  pageCount: 0,
  currentPageStart: 0,
  currentPageEnd: 0
}
function paginationReducer ( state = initialState, action ) {
  switch(action.type) {
    case NEXT_PAGE:
    break;
    default: return state;
  }
}
function getNextTag (book, start) {

}
