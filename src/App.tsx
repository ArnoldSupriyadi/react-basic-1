import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/Button';
import Avatar from './components/avatar/Avatar';
import Input from './components/input/Input';

function App() {
  return (
    <div>
        <Button label='Button 1 Primary' variant='primary' />
        <Button label='Button 2 Secondary' variant='secondary'/>
        <Avatar url="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" label="Gambar 1" size='sm'/>
        <Avatar url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 2" size='md'/>
        <Avatar url="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGh1bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" label="Gambar 3" size='lg'/>
        <Input />
    </div>
  );
}

export default App;
