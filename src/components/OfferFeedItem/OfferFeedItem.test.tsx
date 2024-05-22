import React from 'react';
import renderer from 'react-test-renderer';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import OfferFeedItem, {IOfferFeedItem} from "./OfferFeedItem";

// Mock the necessary hooks
jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('OfferFeedItem', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };

  const mockUseSelector = useSelector as jest.Mock;
  const mockUseNavigation = useNavigation as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseNavigation.mockReturnValue(mockNavigation);
    mockUseSelector.mockReturnValue({ data: [] });
  });

  const mockItem: IOfferFeedItem = {
    retailerLogo: 'https://example.com/logo.png',
    title: 'Sample Offer',
    expirationDate: '2024-12-31T23:59:59.999Z',
    description: 'This is a sample offer description.',
    cashbackAmount: 10,
    id: 1,
  };

  it('renders the component correctly', () => {
    const tree = renderer.create(<OfferFeedItem item={mockItem} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('shows "Cashback Applied!" when the offer is claimed', () => {
    mockUseSelector.mockReturnValue({ data: [1] });
    const tree = renderer.create(<OfferFeedItem item={mockItem} />);
    const cashbackText = tree.root.findAllByType('Text').find(
      (node) => node.children[0] === 'Cashback Applied!'
    );

    expect(cashbackText).toBeTruthy();
  });
});
