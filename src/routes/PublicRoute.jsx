import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

// - Если маршрут ограниченный, и юзер залогинен, рендерит редирект на redirectTo
// - В противном случае рендерит компонент

export const PublicRoute = ({
  restricted = false,
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
