import { render,screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserList from './UserList'

test('render test',()=>{
    const users=[
      {name:'Ravi',email:'ravi@gmail.com'},
      {name:'Chauhan' ,email:'Chauhan@gmail.com'},
    ]

    render(<UserList users={users}/>);

    const rows=within(screen.getByTestId('users')).getAllByRole('row');

    expect(rows).toHaveLength(2);

})
