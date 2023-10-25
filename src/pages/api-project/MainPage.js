import { toast } from 'react-toastify';

function MainPage(){
  const notify = () => toast("Veikia 1", {
    position: "top-center",
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
  const notify2 = () => toast("Veikia 2");

  return (
    <div>
      <button onClick={notify}>Notify !</button>
      <button onClick={notify2}>Notify 2 !</button>
    </div>
  );
}

export default MainPage