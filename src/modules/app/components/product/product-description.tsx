import React, { useEffect, useState } from 'react';
import { Product } from '../../../../models/main/product/product.model';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { classNames } from '../../../../utils/classname.util';
import {
  getEditorStateFromHTML,
  getHTMLFromEditorState,
} from '../../../../utils/editor.util';

interface Props {
  product: Product;
  onUpdateProduct: (product: Product) => any;
}

const ProductDescription = ({ product, onUpdateProduct }: Props) => {
  const [dirty, setDirty] = useState(false);
  const [editorState, setEditorState] = useState(
    getEditorStateFromHTML(product.description)
  );

  const onEditorStateChange = (state: EditorState) => {
    setEditorState(state);
  };

  const updateContent = () => {
    if (!dirty) {
      return;
    }
    const data: Product = {
      ...product,
      description: getHTMLFromEditorState(editorState),
    };
    onUpdateProduct(data);
  };

  useEffect(() => {
    const savedHTML = getHTMLFromEditorState(
      getEditorStateFromHTML(product.description)
    );
    const unSavedHTML = getHTMLFromEditorState(editorState);
    setDirty(savedHTML !== unSavedHTML);
  }, [editorState, product.description]);

  return (
    <div className='flex flex-col gap-2'>
      <Editor
        defaultEditorState={editorState}
        toolbarClassName='!border !border-gray-200 rounded!'
        wrapperClassName='border border-gray-300 rounded p-2 h-fit w-full !box-border'
        editorClassName='border border-gray-200 rounded !h-[unset] px-4 py-0 max-h-[20rem] min-h-[10rem]'
        onEditorStateChange={onEditorStateChange}
      />
      <button
        type='button'
        className={classNames(
          !dirty ? 'cursor-not-allowed opacity-50' : 'hover:bg-indigo-200',
          'text-indigo-700 bg-indigo-100 cursor-pointer self-end w-fit inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
        onClick={updateContent}
      >
        Save
      </button>
    </div>
  );
};

export default ProductDescription;
