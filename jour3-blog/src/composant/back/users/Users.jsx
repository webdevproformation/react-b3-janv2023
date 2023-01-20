import { Link } from "react-router-dom";
import { useState } from "react"

const Users = () => {
    const [users, setUsers] = useState([])

    return ( <>
        <header className="d-flex justify-content-between align-items-center mb-3">
            <h1>Gestion de profils utilisateurs</h1>
            <Link to="/admin/users/add" className="btn btn-success btn-sm">Nouveau profil</Link>
        </header>
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>login</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                { users.length === 0 ? 
                    <tr>
                        <td colSpan={3} className="text-center py-3">
                            aucun profil utilisateur pour l'instant
                        </td>
                    </tr>     :
                    <>
                        {users.map( user => {
                            return <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>
                                    <button className="btn btn-sm btn-warning me-2">modifier</button>
                                    <button className="btn btn-sm btn-danger">supprimer</button>
                                </td>
                            </tr>
                        } )}
                    </>
                }
            </tbody>
        </table>
    </> );
}
 
export default Users;