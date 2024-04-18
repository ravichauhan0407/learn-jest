import { render,screen } from "@testing-library/react";
import UserList from "./UserList";
import userEvent from "@testing-library/user-event";


test('render test',()=>{
    render(<UserList/>)

   const div= screen.queryAllByTitle('div');
   console.log(div)
   expect(div).toHaveLength(1)
})

test('testing input',()=>{
    // not the good implementation 
    // let argList=[]
    // const callback=(...args)=>{
    //   argList.push(args)
    // }
    const mock=jest.fn()
    render(<UserList onSubmit={mock}/>)
    
    const input=screen.getByRole('textbox',{name:/name/i})
    const button=screen.getByRole('button');
    
    userEvent.click(input)
    const name='Ravi'
    userEvent.keyboard(name)

    userEvent.click(button)

    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({name});


})