import { render,screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserForm from "./UserForm";
import { act } from "react-dom/test-utils";




test('testing input',async ()=>{
    // not the good implementation 
    // let argList=[]
    // const callback=(...args)=>{
    //   argList.push(args)c
    // }
    const mock=jest.fn()
    render(<UserForm onSubmit={mock}/>)
    
    const nameInput=screen.getByRole('textbox',{name:/name/i})
    const emailInput=screen.getByRole('textbox',{name:/email/i})

    const button=screen.getByRole('button');
    
    const name='Ravi'
    const email= 'ravichauhan0407@gmail.com'
    await userEvent.click(nameInput)
    await  userEvent.keyboard(name)
    await userEvent.click(emailInput)
    await  userEvent.keyboard(email)

    await userEvent.click(button)

      expect(mock).toHaveBeenCalled();
 
      expect(mock).toHaveBeenCalledWith({name,email});


})