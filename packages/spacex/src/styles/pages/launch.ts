import styled from 'styled-components';

const getLaunchBackground = ({ launchStatus }) => {
  return launchStatus ? 'green' : '#d9534f';
};

export const Container = styled.section`
  display: flex;
  width: 100%;

  justify-content: center;
  padding-top: 40px;
`;

export const LaunchList = styled.div`
  width: 800px;
  padding: 20px;
`;

export const Launch = styled.div`
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
  padding: 20px;

  border: 1px solid lightgray;
`;

export const LaunchName = styled.h1``;

export const LaunchDate = styled.span``;

export const LaunchLabel = styled.span`
  padding: 20px;
  background-color: ${getLaunchBackground};
  border-radius: 5px;
  color: white;
  font-weight: 500;
`;

export const LaunchStatus = styled.div`
  margin-top: 20px;
`;
