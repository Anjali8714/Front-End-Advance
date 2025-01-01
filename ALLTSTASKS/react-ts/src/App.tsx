import './App.css'

function App() {
  return (
    <div>
       <div className='w=[350px'>
     <form className='mb-5'>
        <input type="text" className='w-full p-2 rounded-sm mb-2 border-black '/>
        <button type='submit' className='bg-gray-700 w-full p-2'>Add</button>
     </form>
     <div className='h-52 overflow-y-auto'>
      <div className='flex justify-between items-center border border-slate-100'>
        <p>JS</p>
        <button>delete</button>
      </div>
     </div>
     </div>
       
    </div>
  )
}

export default App
