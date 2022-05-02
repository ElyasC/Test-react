import { Modal, Button, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import React, { useContext } from 'react';
import { DestinationsContext } from '../../context/destination/context';



import './Modal.css'

function MyVerticallyCenteredModal(props) {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange'
  })
  const { isSubmitting, isValid } = formState
  const [state, dispatch] = useContext(DestinationsContext)
  const onSubmit = data => dispatch({ type: "SET_DESTINATION", payload: data });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ajouter une nouvelle destination
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className='container' onSubmit={handleSubmit(onSubmit)}>
          <input type="text" className="form-control" placeholder="Nom de la destination"  {...register("destination", { required: true })} />
          <input type="text" className="form-control" placeholder="Adresse" {...register("adresse", { required: true })} />
          <input type="text" className="form-control" id="imgDestination" placeholder="Lien de l'image" {...register("imgDestination", { required: true })} />
          <div className='Form-second-block'>
            <input type="text" className="form-control Child-form-second-block" id="NbHabitants" placeholder="Nb Habitants" {...register("nbHabitants", { required: true })} />
            <input type="text" className="form-control Child-form-second-block" id="NbHotels" placeholder="Nb Hôtels" {...register("nbHotel", { required: true })} />
            <input type="text" className="form-control Child-form-second-block" id="RevenueMoy" placeholder="Revenu Moy" {...register("revenuMoy", { required: true })} />
            <input type="text" className="form-control Child-form-second-block" id="Superficie" placeholder="Superficie" {...register("superficie", { required: true })} />
          </div>
          <div className="form-check form-switch">
          
            <label className="form-check-label" >Activer</label>
          </div>
          <div className='Modal-form-button'>
            <Button variant='btn secondary' onClick={props.onHide}>CANCEL</Button>
            <input className="Modal-button" type="submit" value="COMFIRM" disabled={isSubmitting || !isValid} onClick={props.onHide} />
          </div>
        </form>
      </Modal.Body>

    </Modal>
  );
}

function ModalButton() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className='Add-section'>
        <h2>Destination</h2>
        <div >
          <button type="button" className="btn btn-primary btn-sm addButton" onClick={() => setModalShow(true)}>+ Ajouter</button>
        </div>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalButton;
