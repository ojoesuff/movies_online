import React, { useContext } from "react";
import TemplatePage from "../components/templatePage";
import WishlistDetail from "../components/wishListDetail";
import { WishlistsContext } from "../contexts/wishlistsContext";
import { MoviesContext } from "../contexts/moviesContext";
import PageTitle from "../components/pageTitle";

const WishlistPage = () => {

    const wishlistContext = useContext(WishlistsContext);
    const { wishlists  } = wishlistContext;
    const moviesContext = useContext(MoviesContext)
    const { movies } = moviesContext
    const title = "Wishlist Page"

    return (
        <>
            <TemplatePage>
            <PageTitle title={title} />
                <WishlistDetail
                    movies={movies}
                    wishlists={wishlists}
                >

                </WishlistDetail>
            </TemplatePage>

        </>
    );
};

export default WishlistPage;