import React, { useEffect, useState } from "react";
import { Modal } from "office-ui-fabric-react";
import "./IndustryProjectsPopUp.scss";

export const IndustryProjectsPopUp = (props: any) => {
  const { isModalOpened } = props;
  const [isModalOpenState, setIsModelOpenState] = useState(false);
  const [modalData, setModalData] = useState(props);

  useEffect(() => {
    if (isModalOpened) {
      setModalData(props);
    } else {
      setModalData(null);
    }
    setIsModelOpenState(isModalOpened);
  }, [isModalOpened, props]);

  return isModalOpenState ? (
    <Modal
      isOpen={isModalOpenState}
      containerClassName="modalContainer"
      styles={{
        main: { width: props.width ? props.width : "800px", height: "769px" },
      }}
    >
      <button
        className="cancelButton"
        onClick={modalData.handleCancelBtnClick}
        type="button"
      >
        X
      </button>
      <div className="modalHeading">{modalData.heading}</div>
      {modalData.body ? modalData.body : null}
    </Modal>
  ) : null;
};

export default IndustryProjectsPopUp;
