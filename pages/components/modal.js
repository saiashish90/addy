import popup from "../../styles/modal.module.scss";
import { useDisableScroll } from "../../hooks/useDisableScroll";
export default function modal({ isOpen, children, close }) {
  useDisableScroll(isOpen);
  if (!isOpen) return null;
  return (
    <>
      <div className={popup.overlay}></div>
      <div className={popup.modal}>
        <div className={popup.close} onClick={close} />
        <form className={popup.form}>
          <span>Email Me</span>
          <div className={popup.inputgroup}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Message" />
          </div>
          <button
            onClick={() => {
              console.log("submitted");
            }}
            className={popup.send}>
            <span className={popup.but}>Send</span>
          </button>
        </form>
      </div>
    </>
  );
}
