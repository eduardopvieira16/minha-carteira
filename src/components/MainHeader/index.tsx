import React from "react";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Welcome>Olá</Welcome>
                <UserName>Eduardo Vieira</UserName>
            </Profile>
        </Container>
    );
};

export default MainHeader;
