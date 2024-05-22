import React from 'react';
import renderer from 'react-test-renderer';
import { useSelector } from 'react-redux';
import { useFetchClaimOffer } from '../../hooks/useClaimOffer';
import OfferDetails from "./OfferDetails";

// Mock necessary hooks and components
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('../../hooks/useClaimOffer', () => ({
  useFetchClaimOffer: jest.fn(),
}));

describe('OfferDetails', () => {
  const mockUseSelector = useSelector as jest.Mock;
  const mockUseFetchClaimOffer = useFetchClaimOffer as jest.Mock;

  const mockOffer = {
    retailerLogo: 'https://example.com/logo.png',
    title: 'Sample Offer',
    description: 'This is a sample offer description.',
    termsAndConditions: 'These are the terms and conditions.',
    id: 1,
  };

  const route = {
    params: {
      offer: mockOffer,
    },
  };

  const fetchOfferMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseFetchClaimOffer.mockReturnValue({
      fetchOffer: fetchOfferMock,
    });
  });

  it('renders the component correctly', () => {
    mockUseSelector.mockReturnValue({ data: [], loading: false, error: null });
    const tree = renderer.create(<OfferDetails route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays a loader when loading', () => {
    mockUseSelector.mockReturnValue({ data: [], loading: true, error: null });
    const tree = renderer.create(<OfferDetails route={route} />);
    const loader = tree.root.findByType('ActivityIndicator');
    expect(loader).toBeTruthy();
  });

  it('displays an error message when there is an error', () => {
    mockUseSelector.mockReturnValue({ data: [], loading: false, error: 'Error' });
    const tree = renderer.create(<OfferDetails route={route} />);
    const errorMessage = tree.root.findByType('Text').children.includes('Failed to load offers');
    expect(errorMessage).toBeTruthy();
  });
});
