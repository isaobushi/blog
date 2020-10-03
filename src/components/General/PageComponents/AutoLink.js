export const AutoLink = `

  a {

    float: left;

    padding-right: 4px;

    margin-left: -20px;

  }

  svg {

    visibility: hidden;
    @media (max-width: 760px){
      visibility: visible;
    }

  }

  &:hover {

    a {

      svg {

        visibility: visible;

      }

    }

  }

`;
