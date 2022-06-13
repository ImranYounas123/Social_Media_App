import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Toast from "./Toast";
const Notify = () => {
  const { notify } = useSelector(state => state);

  const dispatch = useDispatch();

  return (
    <>
      <div>
        {notify.loading && <h1>Loading</h1>}
        {
        notify.error &&   
          <Toast
            msg={notify.error}
            handleshow=""
            bgColor="bg-danger"
          />
        }
        
        {notify.success && 
          <Toast
            msg={{ title: "success", body: notify.success }}
            handleshow= {()=> dispatch({type : 'NOTIFY', payload :  {}})}
            bgColor="bg-success"
          />
        }

        
      </div>
    </>
  );
};

export default Notify;
