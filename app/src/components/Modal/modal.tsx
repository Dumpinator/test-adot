import React, { FunctionComponent, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

export interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {

    const onKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode === 27 && isShown) {
      hide();
    }
  };

    useEffect(() => {
    isShown
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "unset");
    document.addEventListener("keydown", onKeyDown, false);
    return () => {
        document.removeEventListener("keydown", onKeyDown, false);
    };
    }, [isShown]);

  const modal = (
    <React.Fragment>
      <div className='backdrop'onClick={hide} />
      <div className='wrapper' aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
        <div className='styledModal'>
          <div className='header'>
            <div className='headerText'>{headerText}</div>
            <div className='closeButton' typeof="button" data-dismiss="modal" aria-label="Close" onClick={hide}>X</div>
          </div>
          <div className='contentModal'>{modalContent}</div>
        </div>
      </div>
    </React.Fragment>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
