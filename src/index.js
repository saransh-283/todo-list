import React from 'react'
import ReactDOM from 'react-dom'
import 'jquery'
import Comp from './js/one'
import './css/style.scss'
import './html/users.html'

ReactDOM.render(<Comp/>,document.getElementById('root'))

$('#text').html('Text')