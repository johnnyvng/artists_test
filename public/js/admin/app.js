var app = angular.module('adminApp', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
		.when('/pages/:id?', {
			controller: 'PageController',
			templateUrl: '/js/admin/partials/pageTmpl.html'
		})
    	.when('/services/:id?', {
      		controller: 'ServiceController',
      		templateUrl: '/js/admin/partials/serviceTmpl.html'
    	})
/*    	.when('/contact/:id?', {
			controller: 'ContactController',
			templateUrl: '/js/admin/partials/contactTmpl.html'
		})*/
		.when('/galleries/:id?', {
			controller: 'GalleryController',
			templateUrl: '/js/admin/partials/galleryTmpl.html'
		})
		.when('/submissions/:id?', {
			controller: 'SubmissionController',
			templateUrl: '/js/admin/partials/submissionTmpl.html'
		})
		.otherwise({ redirectTo: '/pages' });

		// DropzoneJS
	$routeProvider
		.when('/gallery/view', {
            templateUrl: 'js/admin/partials/gallery/gallery-view.html',
            controller: 'GalleryS3Controller',
            // resolve: {
            //     data: function(galleryModel) {
            //         return {
            //             galleries: galleryModel.getAllGalleries()
            //         };
            //     }
            // },
            // authenticated: true
        })
        .when('/gallery/add', {
            templateUrl: 'js/admin/partials/gallery/gallery-add.html',
            controller: 'GalleryS3Controller',
            // resolve: {
            //     data: function() {
            //         return 'single';
            //     }
            // },
            // authenticated: true
        });

}]);


