import sanitizeHtml from 'sanitize-html';
import {
  ContentState,
  convertFromHTML,
  convertToRaw,
  EditorState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';

export const getEditorStateFromHTML = (html: string): EditorState => {
  const sanitizedHTML = sanitizeHtml(html);
  return EditorState.createWithContent(
    ContentState.createFromBlockArray(
      convertFromHTML(sanitizedHTML).contentBlocks,
      convertFromHTML(sanitizedHTML).entityMap
    )
  );
};

export const getHTMLFromEditorState = (editorState: EditorState): string => {
  const contentState: ContentState = editorState.getCurrentContent();
  return sanitizeHtml(draftToHtml(convertToRaw(contentState)));
};
