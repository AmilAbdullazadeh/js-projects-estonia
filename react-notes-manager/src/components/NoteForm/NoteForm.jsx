import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { FieldError } from "components/FieldError/FieldError";
import { useState } from "react";
import { PencilFill, TrashFill } from "react-bootstrap-icons";
import { ValidatorService } from "services/validator";
import s from "./style.module.css";

const VALIDATION_RULES = {
  title: (fieldValue) => ValidatorService.min(fieldValue, 3) || ValidatorService.max(fieldValue, 20),
  content: (fieldValue) => ValidatorService.min(fieldValue, 3),
};

export function NoteForm({
  title,
  onSubmit,
  note,
  id,
  isEditable,
  changeEditable,
  onClickDelete,
}) {
  const [formValues, setFormValues] = useState({
    title: note.title ? note.title : "",
    content: note.content ? note.content : "",
  });
  const [formErrors, setFormErrors] = useState({
    title: note.title ? "" : undefined,
    content: note.content ? "" : undefined,
  });

  const updateFormValues = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const validate = (fieldName, fieldValue) => {
    const errorMessage = VALIDATION_RULES[fieldName](fieldValue);
    setFormErrors({ ...formErrors, [fieldName]: errorMessage });
  };

  const hasError = () => {
    return Object.values(formErrors).some((field) => field);
    // for (const field in formErrors) {
    //   if (formErrors[field]) return true;
    // }
    // return false;
  };

  const actionIcons = (
    <>
      <div className="col-1">
        {isEditable && (
          <PencilFill onClick={() => changeEditable()} className={s.icon} />
        )}
      </div>
      <div className="col-1">
        {isEditable && (
          <TrashFill onClick={() => onClickDelete()} className={s.icon} />
        )}
      </div>
    </>
  );

  const titleInput = (
    <div className="mb-5">
      <label className="form-label">Title</label>
      <input
        onChange={updateFormValues}
        type="text"
        name="title"
        className="form-control"
        value={formValues.title}
      />
      <FieldError msg={formErrors?.title} />
    </div>
  );

  const contentInput = (
    <div className="mb-5">
      <label className="form-label">Content</label>
      <textarea
        onChange={updateFormValues}
        type="text"
        name="content"
        className="form-control"
        row="5"
        value={formValues.content}
      />
      <FieldError msg={formErrors?.content} />
    </div>
  );

  const submitBtn = (
    <div className={s.submit_btn}>
      <ButtonPrimary disabled={hasError()} onClick={() => onSubmit(formValues)}>
        Submit
      </ButtonPrimary>
    </div>
  );

  return (
    <div className={s.container}>
      <div className="row justify-content-space-between">
        <div className="col-10">
          <h2 className="mb-3">{title}</h2>
        </div>
        {actionIcons}
      </div>
      <div className={`mb-3 ${s.title_input_container}`}>
        {isEditable ? titleInput : note?.title}
      </div>
      <div className="mb-3">
        {isEditable ? contentInput : <pre>{note?.content}</pre>}
      </div>
      {onSubmit && submitBtn}
    </div>
  );
}
