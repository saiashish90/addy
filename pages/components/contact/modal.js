import popup from "./modal.module.scss";
import { useDisableScroll } from "../../../hooks/useDisableScroll";
export default function modal({ isOpen, close, flash }) {
  useDisableScroll(isOpen);
  if (!isOpen) return null;
  return (
    <>
      <div className={popup.overlay}></div>
      <div className={popup.modal}>
        <div className={popup.close} onClick={close} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = JSON.stringify(Object.fromEntries(new FormData(e.target)));
            fetch("/api/hello", {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
              },
              body: data,
            }).then((res) => {
              flash(res.status);
              close();
            });
          }}
          className={popup.form}>
          <span>Email Me</span>
          <div className={popup.inputgroup}>
            <input id="name" name="name" type="text" placeholder="Name" required />
            <input id="email" name="email" type="email" placeholder="Email" required />
            <textarea id="message" name="message" type="text" placeholder="Message" required />
          </div>
          <button className={popup.send}>
            <span className={popup.but}>Send</span>
          </button>
        </form>
      </div>
    </>
  );
}
