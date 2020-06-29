import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import { MdMenu, MdSearch, MdVideoCall, MdApps, MdNotifications } from 'react-icons/md';

import {
  Container,
  Navigation,
  Search,
  Actions,
  ButtonAction,
  Profile,
  ProfileNotImage,
} from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Navigation>
        <MdMenu color={colors.icons} size={24} />
        <img src={require(`../../assets/logo-${title}.png`)} alt="Youtube" />
      </Navigation>

      <Search>
        <form>
          <input type="text" placeholder="Pesquisar" />

          <button type="submit">
            <MdSearch size={20} />
          </button>
        </form>
      </Search>

      <Actions>
        <ButtonAction type="button">
          <MdVideoCall color={colors.icons} size={24} />
        </ButtonAction>

        <ButtonAction type="button">
          <MdApps color={colors.icons} size={24} />
        </ButtonAction>

        <ButtonAction type="button">
          <MdNotifications color={colors.icons} size={24} />
        </ButtonAction>

        <Profile>
          <ProfileNotImage />
        </Profile>
      </Actions>

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.red}
        offHandleColor="#f00"
      />
    </Container>
  );
};

export default Header;
