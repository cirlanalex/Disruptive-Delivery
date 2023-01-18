import { useHistory } from "react-router-dom";

export default function Navbar() {
    const history = useHistory();
    return <nav className="nav">
        <button className="size-title" onClick={() => {history.push('/')}}>Disruptive delivery</button>
        <ul>
                {localStorage.getItem("employee_type") === 'manager' ? <li><button onClick={() => {history.push('/manager')}}>Manager</button></li> : null}
                {localStorage.getItem("employee_type") === 'driver' ? <li><button onClick={() => {history.push('/driver')}}>Driver</button></li> : null}
                {localStorage.getItem("employee_type") === 'warehouseEmployee' ? <li><button onClick={() => {history.push('/warehouse')}}>Warehouse</button></li> : null}
                {localStorage.getItem("employee_type") === 'callcenterOperator' ? <li><button onClick={() => {history.push('/callcenter')}}>Callcenter</button></li> : null}
            <li>
                <button onClick={() => {history.push('/reviews')}}>Reviews</button>
            </li>
            <li>
                <button onClick={() => {history.push('/trackorder')}}>Track Order</button>
            </li>
            <li>
                {localStorage.getItem("id") === null ? <button onClick={() => {history.push('/login')}}>Login</button> : <button onClick={() => {localStorage.removeItem("id"); localStorage.removeItem("employee_type"); history.push('/'); window.location.reload(true);}}>Logout</button>}
            </li>
        </ul>
    </nav>
}