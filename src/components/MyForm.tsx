import React, {useState} from 'react';

type MyFormProps = {
  onSubmit : (form : {name : string; description : string}) => void
}
function MyForm({onSubmit}:MyFormProps){
  const [form, setForm] = useState({
    name : '',
    description : ''
  })

  const {name, description} = form;

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const {name , value } = e.target;
    setForm({
      ...form,
      [name] : value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // 여기도 모르니까 any 로 하겠습니다.
    e.preventDefault();
    onSubmit(form);
    setForm({
      name: '',
      description: ''
    }); // 초기화
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={onChange} value ={name} name="name"/>
      <input type="text" onChange={onChange} value ={description} name="description"/>
      <button type="submit">제출</button>
    </form>
  )
}

export default MyForm;