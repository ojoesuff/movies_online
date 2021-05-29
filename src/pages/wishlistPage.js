import React, { useContext } from "react";
import TemplatePage from "../components/templatePage";
import WishlistDetail from "../components/wishListDetail";
import { WishlistsContext } from "../contexts/wishlistsContext";
import { MoviesContext } from "../contexts/moviesContext";
import { AuthContext } from "../contexts/authContext";
import PageTitle from "../components/pageTitle";
import { Redirect } from "react-router";

const WishlistPage = () => {

    const wishlistContext = useContext(WishlistsContext);
    const { wishlists  } = wishlistContext;
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;
    const moviesContext = useContext(MoviesContext)
    const { movies } = moviesContext
    const title = "Wishlist Page"

    if (isAuthenticated === false) {
        return <Redirect to={"/user/login"} />;
    }

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