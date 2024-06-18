import { ACTIONS_DRAG_DROP, SPORTS_JSON } from "../Constants/constants.js";


export const reducer_dragdrop = (state, action) => {
  switch (action.type) {
    case ACTIONS_DRAG_DROP.DRAG_START:
      return {
        ...state,
        dragItemIndex: action.payload,
        dragStar: true,
        dragOver: false,
        dragLeave: false,
        dragDrop: false,
        dragEnd: false,
      }
    case ACTIONS_DRAG_DROP.DRAG_OVER:
      return {
        ...state,
        dragStar: false,
        dragOver: true,
        dragLeave: false,
        dragDrop: false,
        dragEnd: false,
      }
    case ACTIONS_DRAG_DROP.DRAG_DROP:
      return {
        ...state,
        sport: SPORTS_JSON.find(sport => sport.id === action.payload.id),
        dragStar: false,
        dragOver: false,
        dragLeave: false,
        dragDrop: true,
        dragEnd: false
      }
    case ACTIONS_DRAG_DROP.DRAG_LEAVE:
      return {
        ...state,
        dragStar: false,
        dragOver: false,
        dragLeave: true,
        dragDrop: false,
        dragEnd: false,
      }
    case ACTIONS_DRAG_DROP.DRAG_END:
      return {
        ...state,
        dragStar: false,
        dragOver: false,
        dragLeave: false,
        dragDrop: false,
        dragEnd: true
      }

    default:
      return state;
  }
}


