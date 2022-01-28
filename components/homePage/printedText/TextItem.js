

import styled from "@emotion/styled";


export const TextItem = styled.div`
  width: 16ch;
  color: white;
  //font-family: monospace;
  font-size: 16px;
  white-space: nowrap; /* не переносить текст на другую строку */
  overflow: hidden; /* скрываем переполнение контентом */
  border-right: 1px solid white; /* рисуем курсор */
  animation: cursor 0.75s step-end infinite, printed_text 3s steps(19);
  @keyframes cursor {
    0% {
      border-color: white;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: white;
    }
  }

  @keyframes printed_text {
    from {
      width: 0;
    }
  }


`
