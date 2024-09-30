import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login/admin');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-gray-900 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Menú de usuario */}
        <div className="relative">
          <button
            onClick={toggleUserMenu}
            className="text-white text-xl font-bold flex items-center space-x-2 focus:outline-none"
          >
            <span>Admin Panel</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
              <ul className="py-1 text-gray-700">
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 hover:text-red-700 transition-colors"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Botón Hamburguesa (responsive) */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menú de navegación */}
        <ul
          className={`flex-col md:flex-row md:flex md:space-x-6 lg:space-x-10 items-center space-y-4 md:space-y-0 mt-4 md:mt-0 transform ${
            isOpen ? 'flex' : 'hidden'
          } md:flex transition-all duration-300 ease-in-out`}
        >
          {[
            { name: 'Home', icon: 'M12 2L2 7h3v9h4V9h6v7h4V7h3L12 2z', path: '/admin/dashboard' },
            { name: 'Usuarios', icon: 'M12 12c-2.21 0-4 1.79-4 4v3h8v-3c0-2.21-1.79-4-4-4z M12 4a4 4 0 100 8 4 4 0 000-8z', path: '/admin/dashboard/users' },
            { name: 'Empresas', icon: 'M4 4h16v2H4V4zm0 5h16v2H4V9zm0 5h16v2H4v-2zm0 5h16v2H4v-2z', path: '/admin/dashboard/empresa' },
            { name: 'Estudiantes', icon: 'M12 12c-2.21 0-4 1.79-4 4v3h8v-3c0-2.21-1.79-4-4-4z M12 4a4 4 0 100 8 4 4 0 000-8z', path: '/admin/dashboard/estudiante' },
            { name: 'Notificaciones', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z M11 14h2v-2h-2v2zm0-4h2V7h-2v3z', path: '/admin/dashboard/notificacion' },
            { name: 'Ofertas', icon: 'M10 17l6-6-6-6v12z', path: '/admin/dashboard/oferta' },
            { name: 'Seguimiento', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z', path: '/admin/dashboard/seguimiento' },
          ].map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-white flex items-center space-x-2'
                    : 'text-gray-400 flex items-center space-x-2 hover:text-white transition-colors'
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={item.icon} />
                </svg>
                <span className="text-sm md:text-base lg:text-lg">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;